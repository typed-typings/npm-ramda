import * as dts from 'dts-element';
import { create_n_ary_declarations } from '../create-n-ary-declarations';

it('should generate correctly without generate_additional', () => {
  expect(emit_n_ary_declarations()).toMatchSnapshot();
});

it('should generate correctly with generate_additional', () => {
  expect(
    emit_n_ary_declarations(
      args => `
    function $variadic<${args.return_type}>(
      n: number,
      fn: (...args: any[]) => ${args.return_type}
    ): (...args: any[]) => ${args.return_type};
  `,
    ),
  ).toMatchSnapshot();
});

function emit_n_ary_declarations(generate_additional?: (args: any) => string) {
  const n_ary_declarations = create_n_ary_declarations(
    0,
    3,
    args => `
      function $${args.curry_level}arity<${args.generics.join(',')}>(
        n: ${args.curry_level},
        fn: (${[...args.parameters, '...args: any[]'].join(',')}) =>
          ${args.return_type}
      ): (${args.parameters.join(',')}) => ${args.return_type};
    `,
    generate_additional,
  );
  const top_level_element = dts.create_top_level_element({
    members: n_ary_declarations,
  });
  return dts.emit(top_level_element);
}
