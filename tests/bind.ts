import * as R from '../ramda/dist/index';

declare const object: object;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: R.Variadic<object>;

// @dts-jest:pass:snap
R.bind(string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R.bind(string_number_symbol_to_boolean, object);

// @dts-jest:pass:snap
R.bind(object_variadic);
// @dts-jest:pass:snap
R.bind(object_variadic, object);
