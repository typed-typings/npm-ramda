import * as R from '../ramda/dist/index';

declare const number: number;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap
R.nAry(1, string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R.nAry(1, object_variadic);

// @dts-jest:pass:snap
R.nAry(number, string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R.nAry(number, object_variadic);
