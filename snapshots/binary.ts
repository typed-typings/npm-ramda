import * as R from '../ramda/dist/index';

declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap -> (a: string, b: number) => boolean
R.binary(string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> (a: any, b: any) => object
R.binary(object_variadic);
