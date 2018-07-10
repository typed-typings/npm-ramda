import * as R from '../ramda/dist/index';

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (
  x: string,
  y: number,
  z: boolean,
) => object;
declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_string: (x: string) => string;

// @dts-jest:pass:snap
R.converge(string_number_boolean_to_object);
// @dts-jest:pass:snap
R.converge(string_number_boolean_to_object)([
  string_to_string,
  string_to_number,
  string_to_boolean,
]);
// @dts-jest:pass:snap
R.converge(string_number_boolean_to_object, [
  string_to_string,
  string_to_number,
  string_to_boolean,
]);

// @dts-jest:pass:snap
R.converge(any_args_to_object);
// @dts-jest:pass:snap
R.converge<'1', 'i2f2'>()(any_args_to_object);
// @dts-jest:pass:snap
R.converge<'1', 'variadic'>()(any_args_to_object);
