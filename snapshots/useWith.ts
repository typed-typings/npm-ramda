import * as R from '../ramda/dist/index';

declare const any_args_to_object: (...args: any[]) => object;
declare const string_number_boolean_to_object: (
  x: string,
  y: number,
  z: boolean,
) => object;
declare const number_to_boolean: (x: number) => boolean;
declare const symbol_to_number: (x: symbol) => number;
declare const number_to_string: (x: number) => string;

// @dts-jest:pass:snap -> <T1, T2, T3>(fns: [R.Morphism<T1, string>, R.Morphism<T2, number>, R.Morphism<T3, boolean>]) => R.CurriedFunction3<T1, T2, T3, object>
R.useWith(string_number_boolean_to_object);
// @dts-jest:pass:snap -> R.CurriedFunction3<number, symbol, number, object>
R.useWith(string_number_boolean_to_object)([
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);
// @dts-jest:pass:snap -> R.CurriedFunction3<number, symbol, number, object>
R.useWith(string_number_boolean_to_object, [
  number_to_string,
  symbol_to_number,
  number_to_boolean,
]);

// @dts-jest:pass:snap -> (fns: never[]) => R.CurriedFunction0<object>
R.useWith(any_args_to_object);
// @dts-jest:pass:snap -> <T1, T2>(fns: [R.Morphism<T1, any>, R.Morphism<T2, any>]) => R.CurriedFunction2<T1, T2, object>
R.useWith<'1', '2arity'>()(any_args_to_object);
// @dts-jest:pass:snap -> (fns: Function[]) => R.Variadic<object>
R.useWith<'1', 'variadic'>()(any_args_to_object);
