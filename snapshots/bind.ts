import * as R from '../ramda/dist/index';

declare const object: object;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap -> (context: any) => (a: string, b: number, c: symbol) => boolean
R.bind(string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> (a: string, b: number, c: symbol) => boolean
R.bind(string_number_symbol_to_boolean, object);

// @dts-jest:pass:snap -> (context: any) => R.Variadic<object>
R.bind(object_variadic);
// @dts-jest:pass:snap -> R.Variadic<object>
R.bind(object_variadic, object);
