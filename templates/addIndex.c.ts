import { max_curry_level } from './$curriedFunctions';
import { create_n_ary_declarations } from './utils/create-n-ary-declarations';

const max_outer_count = max_curry_level - 2;

const outer_variables = [...new Array(max_outer_count)].map(
  (_, index) => `x${index + 1}`,
);
const outer_generics = [...new Array(max_outer_count)].map(
  (_, index) => `P${index + 1}`,
);
const outer_paramters = outer_variables.map(
  (variable, index) => `${variable}: ${outer_generics[index]}`,
);
const outer_arguments = [...new Array(max_outer_count + 1)].map((_, index) => ({
  count: index,
  variables: outer_variables.slice(0, index),
  generics: outer_generics.slice(0, index),
  parameters: outer_paramters.slice(0, index),
}));

export default create_n_ary_declarations(
  1,
  max_curry_level,
  args =>
    outer_arguments
      .map(
        outer_args => `
    function $v${args.curry_level}x${outer_args.count}<${[
          ...args.types,
          'U',
          ...outer_args.generics,
          'V',
          args.return_type,
        ].join(',')}>(
      iterFn: (fn: (${args.parameters.join(',')}) => U, ${[
          ...outer_args.parameters,
          'target: V',
        ].join(',')}) => ${args.return_type}
    ): CurriedFunction${outer_args.count + 2}<(${[
          ...args.parameters,
          'index: number',
          'target: V',
        ].join(',')}) => U, ${[
          ...outer_args.generics,
          'V',
          args.return_type,
        ].join(',')}>;
  `,
      )
      .join(','),
  args => `
    import {${args.curry_levels
      .slice(1)
      .map(i => `CurriedFunction${i}`)
      .join(',')}} from './$curriedFunctions';
    import {Variadic} from './$types';
    function $variadic<U, V, ${args.return_type}>(
      iterFn: (fn: Variadic<U>, target: V) => ${args.return_type}
    ): CurriedFunction2<Variadic<U>, V, ${args.return_type}>;
  `,
);
