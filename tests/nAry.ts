import { Variadic } from '../ramda/dist/src/$types';
import * as R_nAry from '../ramda/dist/src/nAry';

declare const number: number;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass:snap
R_nAry(1, string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R_nAry(1, object_variadic);

// @dts-jest:pass:snap
R_nAry(number, string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R_nAry(number, object_variadic);
