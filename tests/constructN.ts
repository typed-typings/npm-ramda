import * as R_constructN from '../ramda/dist/src/constructN';

declare const new_string_to_object: new (x: string) => object;
declare const new_number_boolean_to_string: new (
  x: number,
  y: boolean,
) => string;
declare const new_number_args_to_boolean: new (...args: number[]) => boolean;
declare const new_7_string_to_number: new (
  v1: string,
  v2: string,
  v3: string,
  v4: string,
  v5: string,
  v6: string,
  v7: string,
) => number;

// @dts-jest:pass:snap
R_constructN(0, new_string_to_object);
// @dts-jest:pass:snap
R_constructN(1, new_number_boolean_to_string);
// @dts-jest:pass:snap
R_constructN(4, new_number_args_to_boolean);
// @dts-jest:pass:snap
R_constructN(7, new_7_string_to_number);
