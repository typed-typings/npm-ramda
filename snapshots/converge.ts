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

// @dts-jest:pass:snap -> <T1>(fns: [(v1: T1) => string, (v1: T1) => number, (v1: T1) => boolean]) => R.CurriedFunction1<T1, object>
R.converge(string_number_boolean_to_object);
// @dts-jest:pass:snap -> R.CurriedFunction1<string, object>
R.converge(string_number_boolean_to_object)([
  string_to_string,
  string_to_number,
  string_to_boolean,
]);
// @dts-jest:pass:snap -> R.CurriedFunction1<string, object>
R.converge(string_number_boolean_to_object, [
  string_to_string,
  string_to_number,
  string_to_boolean,
]);

// @dts-jest:pass:snap -> <T1>(fns: [(v1: T1) => any]) => R.CurriedFunction1<T1, object>
R.converge(any_args_to_object);
// @dts-jest:pass:snap -> <T1, T2>(fns: [(v1: T1, v2: T2) => any, (v1: T1, v2: T2) => any]) => R.CurriedFunction2<T1, T2, object>
R.converge<'1', 'i2f2'>()(any_args_to_object);
// @dts-jest:pass:snap -> (fns: R.List<R.Variadic<any>>) => R.Variadic<object>
R.converge<'1', 'variadic'>()(any_args_to_object);
