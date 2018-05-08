import assert = require('assert');
import * as dts from 'dts-element';
import * as dts_fp from 'dts-element-fp';
import * as fs from 'fs';
import * as path from 'path';
import {
  placeholder_name,
  placeholder_name_abbr,
} from '../../templates/utils/constants';
import { bind_jsdoc } from './bind-jsdoc';
import { bind_mixin } from './bind-mixin';
import { placeholder, selectable } from './constants';

export function generate_file_content(filename: string) {
  return dts.emit(get_top_level_members(filename));
}

function get_top_level_members(filename: string): dts.ITopLevelMember[] {
  const members: dts.ITopLevelMember[] = [];
  const basename = path.basename(filename);
  const function_name = basename.match(/^\$?(.+?)\./)![1];

  if (basename === '$curriedFunctions.ts') {
    push_curried_functions_members();
  } else if (basename.endsWith('.d.ts')) {
    if (basename.startsWith('$')) {
      push_r_ts_members();
    } else {
      push_d_ts_members();
    }
  } else if (basename.endsWith('.c.ts')) {
    push_c_ts_members();
  } else if (basename.endsWith('.r.ts')) {
    push_r_ts_members();
  } else if (basename.endsWith('.ts')) {
    push_ts_members();
  } else {
    throw new Error(`Unexpected filename ${filename}`);
  }

  if (!basename.startsWith('$')) {
    bind_member_jsdoc();
    add_export_equal();
  }

  if (function_name === 'path') {
    bind_mixin(
      members,
      dts
        .parse(
          fs.readFileSync(
            path.resolve(__dirname, '../mixins/path.d.ts'),
            'utf8',
          ),
        )
        .members.filter(dts.is_function_declaration)
        .map(function_declaration => function_declaration.type!),
    );
  }

  return members;

  function add_export_equal() {
    const target_member = members.find(member => {
      switch (member.kind) {
        case dts.ElementKind.VariableDeclaration:
        case dts.ElementKind.FunctionDeclaration:
          return true;
        default:
          return false;
      }
    }) as undefined | dts.IVariableDeclaration | dts.IFunctionDeclaration;
    if (target_member === undefined) {
      throw new Error(`Cannot find element to set export equal in ${filename}`);
    }
    members.push(dts.create_export_equal({ value: target_member.name! }));
  }

  function bind_member_jsdoc() {
    const target_member_index = members.findIndex(member => {
      switch (member.kind) {
        case dts.ElementKind.VariableDeclaration:
          return function_name === '__';
        case dts.ElementKind.TypeDeclaration:
        case dts.ElementKind.FunctionDeclaration:
          return true;
        default:
          return false;
      }
    });
    if (target_member_index === -1) {
      throw new Error(`Cannot find element to bind jsdoc in ${filename}`);
    }
    const target_member = members[target_member_index] as
      | dts.IVariableDeclaration
      | dts.IFunctionDeclaration
      | dts.ITypeDeclaration;
    if (target_member.kind === dts.ElementKind.TypeDeclaration) {
      const target_overloads = (target_member.type as dts.IObjectType).members!;
      bind_jsdoc(filename, target_overloads[0]);
    } else {
      bind_jsdoc(filename, members[target_member_index]);
    }
  }

  function push_r_ts_members() {
    const top_level_element = dts.parse(fs.readFileSync(filename, 'utf8'));
    members.push(...top_level_element.members);
  }

  function push_d_ts_members() {
    const top_level_element = dts.parse(fs.readFileSync(filename, 'utf8'));
    push_curry_members(top_level_element.members);
  }

  function push_ts_members() {
    const declarations = get_ts_default();
    members.push(...declarations);
  }

  function push_c_ts_members() {
    const declarations = get_ts_default();
    push_curry_members(declarations);
  }

  function push_curried_functions_members() {
    const curried_functions_generator = get_ts_default(true);
    const declarations = curried_functions_generator(selectable, placeholder);
    members.push(...declarations);
  }

  function push_curry_members(the_members: dts.ITopLevelMember[]) {
    const raw_hoist_name = 'allInOne';

    const imports = the_members.filter(
      (member): member is dts.IImportNamed =>
        member.kind === dts.ElementKind.ImportNamed,
    );
    const functions = the_members.filter<dts.IFunctionDeclaration>(
      (member): member is dts.IFunctionDeclaration =>
        member.kind === dts.ElementKind.FunctionDeclaration,
    );

    if (!functions.every(fn => fn.name!.startsWith('$'))) {
      throw new Error(
        `Exported functions in ${filename} should be prefixed with $`,
      );
    }

    const function_names_no_need_to_check_last_overload_name = ['cond'];
    if (
      function_names_no_need_to_check_last_overload_name.indexOf(
        function_name,
      ) === -1
    ) {
      const valid_last_overload_names = [
        '$mixed',
        '$general',
        '$variadic',
        `$${raw_hoist_name}`,
      ];
      if (
        functions.length > 1 &&
        valid_last_overload_names.indexOf(
          functions[functions.length - 1].name!,
        ) === -1
      ) {
        throw new Error(
          `Exported multi-overload functions in ${filename} should end with ${valid_last_overload_names.join(
            ' / ',
          )}}`,
        );
      }
    }

    const overload_names_should_exist_simultaneously = ['$record', '$keyof'];
    if (
      functions.some(
        func =>
          overload_names_should_exist_simultaneously.indexOf(func.name!) !== -1,
      )
    ) {
      const is_exist_simultaneously = overload_names_should_exist_simultaneously.every(
        overload_name => functions.some(func => func.name === overload_name),
      );
      if (!is_exist_simultaneously) {
        throw new Error(
          `Exported multi-overload functions in ${filename} should have ${overload_names_should_exist_simultaneously.join(
            ' / ',
          )} simultaneously`,
        );
      }
    }

    const has_all_in_one =
      functions[functions.length - 1].name === `$${raw_hoist_name}`;

    if (has_all_in_one) {
      functions.splice(-1, 1, create_all_in_one(functions.slice(0, -1)));
    }

    const placeholder_imports =
      !placeholder || functions[0].type!.parameters!.length <= 1
        ? []
        : dts.parse(`
        import {${placeholder_name} as ${placeholder_name_abbr}} from './$placeholder';
      `).members;

    const curried_declarations = dts_fp.create_curried_declarations(
      path.basename(filename).replace(/(\.[a-z])?\.ts$/, ''),
      functions.reduce<Record<string, dts.IFunctionType>>(
        (current_functions, fn) => ({
          ...current_functions,
          [fn.name!.slice(1)]: fn.type!,
        }),
        {},
      ),
      {
        selectable,
        placeholder,
        hoist_name: functions.find(x => x.name === `$${raw_hoist_name}`)
          ? raw_hoist_name
          : undefined,
      },
    );

    if (has_all_in_one) {
      add_all_in_one_selectables(
        curried_declarations.filter(dts.is_type_declaration),
      );
    }

    members.push(...imports, ...placeholder_imports, ...curried_declarations);
  }

  function get_ts_default(special_case = false) {
    // tslint:disable-next-line:no-require-imports
    const required: any = require(filename);
    delete require.cache[require.resolve(filename)];
    const declarations = required.default;

    if (!special_case && !is_valid_export_default(declarations)) {
      throw new Error(
        `Template.ts should default-export an array of declarations: ${filename}`,
      );
    }

    return declarations;
  }

  function is_valid_export_default(
    export_default: any,
  ): export_default is dts.ITopLevelMember[] {
    return export_default instanceof Array;
  }

  function create_all_in_one(
    functions: dts.IFunctionDeclaration[],
  ): dts.IFunctionDeclaration {
    if (functions.length < 2) {
      throw new Error(
        `There must be at least 2 functions so as to create $allInOne. (${filename})`,
      );
    }

    const function_types = functions.map(func => func.type!);

    const generic_names = function_types[0].generics!.map(x => x.name);
    const parameters = function_types[0].parameters!;

    function_types.slice(1).forEach(function_type => {
      if (function_type.generics!.some((x, i) => x.name !== generic_names[i])) {
        throw new Error(
          `Generic names for creating $allInOne should be the same. (${filename})`,
        );
      }
      assert.deepEqual(
        function_type.parameters!.map(x => x.type),
        parameters!.map(x => x.type),
        `Parameters for creating $allInOne should be the same. (${filename})`,
      );
    });

    const generic_extends = function_types.map(function_type =>
      function_type.generics!.map(x => x.extends),
    );
    const generic_extends_is_deep_equal = generic_extends[0].map((x, index) =>
      generic_extends.slice(1).every(y => deep_equal(y[index], x)),
    );
    const return_types = function_types.map(
      function_type => function_type.return!,
    );

    return dts.create_function_declaration({
      name: '$allInOne',
      export: true,
      type: dts.create_function_type({
        parameters,
        generics: generic_names.map((name, index) => {
          const extend_types = generic_extends
            .map(x => x[index])
            .filter(is_non_null);
          return dts.create_generic_declaration({
            name,
            extends:
              extend_types.length === 0
                ? undefined
                : dts.create_union_type({ types: deduplicate(extend_types) }),
          });
        }),
        return: (function recursive(index): dts.IType {
          return create_nested_conditional_type(
            generic_names,
            // remove same constraint
            generic_extends[index].map(
              (x, i) => (generic_extends_is_deep_equal[i] ? undefined : x),
            ),
            return_types[index] as Exclude<dts.IType, dts.ITypePredicate>,
            index === return_types.length - 1
              ? dts.never_type
              : recursive(index + 1),
          );
        })(0),
      }),
    });
  }
}

function is_non_null<T>(x: T): x is NonNullable<T> {
  return x !== null && x !== undefined;
}

function create_nested_conditional_type(
  generic_names: string[],
  generic_extends: (undefined | dts.IType)[],
  true_type: dts.IType,
  false_type: dts.IType,
): dts.IType {
  assert.equal(generic_names.length, generic_extends.length);

  if (generic_extends.length === 0) {
    return true_type;
  }

  const next_type = create_nested_conditional_type(
    generic_names.slice(1),
    generic_extends.slice(1),
    true_type,
    false_type,
  );

  if (generic_extends[0] === undefined) {
    return next_type;
  }

  return dts.create_conditional_type({
    check: dts.create_general_type({ name: generic_names[0] }),
    extends: generic_extends[0]!,
    true: next_type,
    false: false_type,
  });
}

function deep_equal(obj1: any, obj2: any) {
  try {
    assert.deepStrictEqual(obj1, obj2);
    return true;
  } catch {
    return false;
  }
}

function deduplicate<T>(array: T[]): T[] {
  const new_array: T[] = [];

  for (const value of array) {
    if (new_array.findIndex(x => deep_equal(x, value)) === -1) {
      new_array.push(value);
    }
  }

  return new_array;
}

function add_all_in_one_selectables(type_declarations: dts.ITypeDeclaration[]) {
  type_declarations
    .filter(type_declaration =>
      /_allInOne_(?!(0+|1+)$)/.test(type_declaration.name),
    )
    .forEach(type_declaration => {
      const mask = type_declaration.name.match(/_allInOne_(\d+)/)![1];
      const target_function_types = type_declarations
        .filter(
          x => x !== type_declaration && new RegExp(`_${mask}$`).test(x.name),
        )
        .map(x => {
          const function_type = (((x.type as dts.IObjectType)
            .members![0] as dts.IObjectMember)
            .owned as dts.IFunctionDeclaration).type!;
          return dts.create_function_type({
            generics: [
              dts.create_generic_declaration({
                name: '$SEL',
                extends: dts.create_literal_type({
                  value: function_type
                    .parameters!.map(
                      parameter => (parameter.name[0] === '_' ? '0' : '1'),
                    )
                    .join(''),
                }),
              }),
              dts.create_generic_declaration({
                name: '$KIND',
                extends: dts.create_literal_type({
                  value: x.name.split('_')[1],
                }),
              }),
            ],
            return: function_type,
          });
        });
      (type_declaration.type as dts.IObjectType).members!.splice(
        -2,
        0,
        ...target_function_types.map(x =>
          dts.create_object_member({
            owned: dts.create_function_declaration({
              name: undefined,
              type: x,
            }),
          }),
        ),
      );
    });
}

// tslint:disable-next-line:max-file-line-count
