import { Variadic } from '../ramda/dist/src/$types';
import * as R_binary from '../ramda/dist/src/binary';

declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass:snap
R_binary(string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R_binary(object_variadic);
