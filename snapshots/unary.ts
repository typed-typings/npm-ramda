import { Variadic } from '../ramda/dist/src/$types';
import R_unary = require('../ramda/dist/src/unary');

declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass:snap -> (a: string) => boolean
R_unary(string_number_symbol_to_boolean);
// @dts-jest:pass:snap -> (a: any) => object
R_unary(object_variadic);
