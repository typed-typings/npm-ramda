import * as R from '../ramda/dist/index';

declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap -> (a: string) => boolean
R.unary(string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> (a: any) => object
R.unary(object_variadic);
