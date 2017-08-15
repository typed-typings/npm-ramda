import { Variadic } from '../ramda/dist/src/$types';
import * as R_bind from '../ramda/dist/src/bind';

declare const object: object;
declare const string_number_symbol_to_boolean: (
  a: string,
  b: number,
  c: symbol,
) => boolean;
declare const object_variadic: Variadic<object>;

// @dts-jest:pass
R_bind(string_number_symbol_to_boolean);
// @dts-jest:pass
R_bind(string_number_symbol_to_boolean, object);

// @dts-jest:pass
R_bind(object_variadic);
// @dts-jest:pass
R_bind(object_variadic, object);
