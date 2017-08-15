import * as dts from 'dts-element';
import { max_curry_level } from './$curriedFunctions';

const return_generic = 'R';
const variable_names = [...new Array(max_curry_level)].map(
  (_, index) => `v${index + 1}`,
);
const input_generics = [...new Array(max_curry_level)].map(
  (_, index) => `T${index + 1}`,
);
const middle_generics = [...new Array(max_curry_level)].map(
  (_, index) => `U${index + 1}`,
);

const declarations = [];
const curried_function_names = [];

for (let i = 0; i <= max_curry_level; i++) {
  const current_variable_names = variable_names.slice(0, i);
  const current_input_generics = input_generics.slice(0, i);
  const current_middle_generics = middle_generics.slice(0, i);
  const curried_function_name = `CurriedFunction${i}`;
  curried_function_names.push(curried_function_name);
  declarations.push(`
    function $${i}arity<${[
    ...current_input_generics,
    ...current_middle_generics,
    return_generic,
  ].join(',')}>(
      after: (${current_variable_names
        .map(
          (variable_name, index) => `
        ${variable_name}: ${current_middle_generics[index]}
      `,
        )
        .join(',')}) => ${return_generic},
      fns: ${current_input_generics.length === 0
        ? `never[]`
        : `[${current_input_generics
            .map(
              (input_generic, index) => `
            Morphism<${input_generic}, ${middle_generics[index]}>
          `,
            )
            .join(',')}]`}
    ): ${curried_function_name}<${[
    ...current_input_generics,
    return_generic,
  ].join(',')}>;
  `);
}

export default dts.parse(`
  import {${curried_function_names.join(',')}} from './$curriedFunctions';
  import {Morphism, Variadic} from './$types';
  ${declarations.join('\n')}
  function $variadic<${return_generic}>(
    after: Variadic<${return_generic}>,
    fns: Function[]
  ): Variadic<${return_generic}>;
`).members;
