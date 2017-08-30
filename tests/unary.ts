import { Variadic } from '../ramda/dist/src/$types';
import * as R_unary from '../ramda/dist/src/unary';

declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass:snap
R_unary(string_number_symbol_to_boolean);
// @dts-jest:pass:snap
R_unary(object_variadic);
