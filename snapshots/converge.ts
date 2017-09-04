import R_converge = require('../ramda/dist/src/converge');

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (
  x: string,
  y: number,
  z: boolean,
) => object;
declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;
declare const string_to_string: (x: string) => string;

// @dts-jest:pass:snap -> <T1>(fns: [(v1: T1) => string, (v1: T1) => number, (v1: T1) => boolean]) => CurriedFunction1<T1, object>
R_converge(string_number_boolean_to_object);
// @dts-jest:pass:snap -> CurriedFunction1<string, object>
R_converge(string_number_boolean_to_object)([
  string_to_string,
  string_to_number,
  string_to_boolean,
]);
// @dts-jest:pass:snap -> CurriedFunction1<string, object>
R_converge(string_number_boolean_to_object, [
  string_to_string,
  string_to_number,
  string_to_boolean,
]);

// @dts-jest:pass:snap -> <T1>(fns: [(v1: T1) => any]) => CurriedFunction1<T1, object>
R_converge(any_args_to_object);
// @dts-jest:pass:snap -> <T1, T2>(fns: [(v1: T1, v2: T2) => any, (v1: T1, v2: T2) => any]) => CurriedFunction2<T1, T2, object>
R_converge<'1', 'i2f2'>()(any_args_to_object);
// @dts-jest:pass:snap -> (fns: ((...args: any[]) => any)[] | ArrayLike<(...args: any[]) => any>) => (...args: any[]) => object
R_converge<'1', 'variadic'>()(any_args_to_object);
