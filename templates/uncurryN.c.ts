import { max_curry_level } from './$curriedFunctions';
import { create_n_ary_declarations } from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  0,
  max_curry_level,
  args => `
    function $${args.curry_level}arity<${[args.return_type, ...args.types]
    .map(x => `${x} = any`)
    .join(',')}>(
      n: ${args.curry_level},
      fn: Variadic<any>
    ): CurriedFunction${args.curry_level}<${args.generics.join(',')}>;
  `,
  args => `
    import {${args.curry_levels
      .map(i => `CurriedFunction${i}`)
      .join(',')}} from './$curriedFunctions';
    import {Variadic} from './$types';
    function $variadic<${args.return_type} = any>(
      n: number,
      fn: Variadic<any>
    ): Variadic<${args.return_type}>;
  `,
);
