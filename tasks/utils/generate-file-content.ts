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
    bind_member_jsdoc_and_add_export_equal();
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

  function bind_member_jsdoc_and_add_export_equal() {
    const target_member_index = members.findIndex(member => {
      switch (member.kind) {
        case dts.ElementKind.FunctionDeclaration:
        case dts.ElementKind.VariableDeclaration:
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
      | dts.IFunctionDeclaration;
    members[target_member_index] = bind_jsdoc(filename, target_member);
    members.push(dts.create_export_equal({ value: target_member.name! }));
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
      const valid_last_overload_names = ['$mixed', '$general', '$variadic'];
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
        inline_return_type: true,
      },
    );

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
}
