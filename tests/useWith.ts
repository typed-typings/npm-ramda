import * as R_useWith from '../ramda/dist/src/useWith';

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (
  x: string,
  y: number,
  z: boolean,
) => object;
declare const number_to_boolean: (x: number) => boolean;
declare const symbol_to_number: (x: symbol) => number;
declare const number_to_string: (x: number) => string;

// @dts-jest:pass:snap
R_useWith(string_number_boolean_to_object);
// @dts-jest:pass:snap
R_useWith(string_number_boolean_to_object)([
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);
// @dts-jest:pass:snap
R_useWith(string_number_boolean_to_object, [
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);

// @dts-jest:pass:snap
R_useWith(any_args_to_object);
// @dts-jest:pass:snap
R_useWith<'1', '2arity'>()(any_args_to_object);
// @dts-jest:pass:snap
R_useWith<'1', 'variadic'>()(any_args_to_object);
