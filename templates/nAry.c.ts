import { max_curry_level } from './$curriedFunctions';
import { create_n_ary_declarations } from './utils/create-n-ary-declarations';

export default create_n_ary_declarations(
  0,
  max_curry_level,
  args => `
    function $${args.curry_level}arity<${args.generics.join(',')}>(
      n: ${args.curry_level},
      fn: (${[...args.parameters, '...args: any[]'].join(',')}) =>
        ${args.return_type}
    ): (${args.parameters.join(',')}) => ${args.return_type};
  `,
  args => `
    import {Variadic} from './$types';
    function $variadic<${args.return_type}>(
      n: number,
      fn: Variadic<${args.return_type}>
    ): Variadic<${args.return_type}>;
  `,
);
