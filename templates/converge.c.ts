import * as dts from 'dts-element';
import { max_curry_level } from './$curriedFunctions';

const min_input_count = 1;
const max_input_count = 3;
const min_function_count = 1;
const max_function_count = max_curry_level;

const generic_return = 'R';
const after_generics = [...new Array(max_function_count)].map(
  (_, index) => `U${index + 1}`,
);
const input_generics = [...new Array(max_input_count)].map(
  (_, index) => `T${index + 1}`,
);
const parameters = [
  ...new Array(Math.max(max_function_count, max_input_count)),
].map((_, index) => `v${index + 1}`);

const import_curried_functions = [];
const declarations = [];
for (
  let input_count = min_input_count;
  input_count <= max_input_count;
  input_count++
) {
  const curried_function_name = `CurriedFunction${input_count}`;
  for (
    let function_count = min_function_count;
    function_count <= max_function_count;
    function_count++
  ) {
    const current_input_generics = input_generics.slice(0, input_count);
    const current_after_generics = after_generics.slice(0, function_count);
    const current_generics = [
      ...current_input_generics,
      ...current_after_generics,
      generic_return,
    ];
    declarations.push(`
      function $i${input_count}f${function_count}<${current_generics.join(
      ',',
    )}>(
        after: (${current_after_generics
          .map((generic, index) => `${parameters[index]}: ${generic}`)
          .join(',')}) => ${generic_return},
        fns: [${current_after_generics
          .map(
            after_generic => `
          (${current_input_generics
            .map(
              (input_generic, index) => `
            ${parameters[index]}: ${input_generic}
          `,
            )
            .join(',')}) => ${after_generic}
        `,
          )
          .join(',')}]
      ): ${curried_function_name}<${[
      ...current_input_generics,
      generic_return,
    ].join(',')}>;
    `);
  }
  import_curried_functions.push(curried_function_name);
}

export default dts.parse(`
  import {${import_curried_functions.join(',')}} from './$curriedFunctions';
  import {List, Variadic} from './$types';
  ${declarations.join('\n')}
  function $variadic<${generic_return}>(after: Variadic<${generic_return}>, fns: List<Variadic<any>>): Variadic<${generic_return}>;
`).members;
