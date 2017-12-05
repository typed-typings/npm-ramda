import * as dts from 'dts-element';
import * as R from 'ramda';

export const create_composition_declarations = (
  name: string,
  kind: 'compose' | 'pipe',
  max_function_count: number,
  max_parameter_count: number,
  // istanbul ignore next
  generate_function_parameter_type: (generic: string) => string = x => x,
  // istanbul ignore next
  generate_function_return_type: (generic: string) => string = x => x,
  // istanbul ignore next
  generate_composed_return_type: (
    generic: string,
  ) => string = generate_function_return_type,
) => {
  const function_names = R.repeat(0, max_function_count).map(
    (_, index) => `fn${index + 1}`,
  );
  const return_generics = R.repeat(0, max_function_count).map(
    (_, index) => `R${index + 1}`,
  );

  const parameter_names = R.repeat(0, max_parameter_count).map(
    (_, index) => `v${index + 1}`,
  );
  const parameter_generics = R.repeat(0, max_parameter_count).map(
    (_, index) => `V${index + 1}`,
  );

  const declarations = [`declare const ${name}: typeof $;`];
  for (
    let function_count = 1;
    function_count <= max_function_count;
    function_count++
  ) {
    const entry_index = kind === 'pipe' ? 0 : function_count - 1;
    const current_return_generics = return_generics.slice(0, function_count);

    const current_sorted_return_generics = current_return_generics.slice();
    const current_sorted_function_names = function_names.slice(
      0,
      function_count,
    );
    if (kind === 'compose') {
      current_sorted_return_generics.reverse();
      current_sorted_function_names.reverse();
    }

    for (
      let parameter_count = 0;
      parameter_count <= max_parameter_count;
      parameter_count++
    ) {
      const current_parameter_names = parameter_names.slice(0, parameter_count);
      const current_parameter_generics = parameter_generics.slice(
        0,
        parameter_count,
      );

      const entry_parameters = current_parameter_names
        .map(
          (parameter_name, param_index) => `
          ${parameter_name}: ${generate_function_parameter_type(
            current_parameter_generics[param_index],
          )}
      `,
        )
        .join(',');

      declarations.push(`
        declare function $<${[
          ...current_parameter_generics,
          ...current_return_generics,
        ].join(',')}>(
          ${current_return_generics
            .map((_, index) => {
              const function_name = current_sorted_function_names[index];
              const return_generic = current_sorted_return_generics[index];
              return index === entry_index
                ? `${function_name}: (${entry_parameters}) => ${generate_function_return_type(
                    return_generic,
                  )}`
                : `${function_name}: (v: ${generate_function_parameter_type(
                    current_sorted_return_generics[
                      index + (kind === 'compose' ? 1 : -1)
                    ],
                  )}) => ${generate_function_return_type(return_generic)}`;
            })
            .join(',')}
        ): (${entry_parameters}) => ${generate_composed_return_type(
        current_return_generics[current_return_generics.length - 1],
      )};
      `);
    }
  }

  return dts.parse(declarations.join('\n')).members;
};
