import { max_curry_level } from './$curriedFunctions';
import { create_n_ary_declarations } from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  2,
  max_curry_level,
  args => `
    function $${args.curry_level}arity<${args.generics.join(',')}>(
      fn: (${args.parameters.join(',')}) => ${args.return_type}
    ): CurriedFunction${args.curry_level}<${[
    ...args.generics.slice(0, 2).reverse(),
    ...args.generics.slice(2),
  ].join(',')}>;
  `,
  args => `
    import {${args.curry_levels
      .map(i => `CurriedFunction${i}`)
      .join(',')}} from './$curriedFunctions';
    function $variadic<${[...args.types.slice(0, 2), args.return_type].join(
      ',',
    )}>(
      fn: (${[...args.parameters.slice(0, 2), '...args: any[]'].join(
        ',',
      )}) => ${args.return_type}
    ): (${[...args.parameters.slice(0, 2).reverse(), '...args: any[]'].join(
      ',',
    )}) => ${args.return_type};
  `,
);
