import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap -> (v1: string) => boolean
R.nAry(1, string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> (v1: any) => object
R.nAry(1, object_variadic);

// @dts-jest:pass:snap -> R.Variadic<boolean>
R.nAry(number, string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> R.Variadic<object>
R.nAry(number, object_variadic);
