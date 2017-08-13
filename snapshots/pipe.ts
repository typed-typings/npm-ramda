import * as R_pipe from '../ramda/dist/src/pipe';

declare const boolean_to_number: (x: boolean) => number;
declare const boolean_to_string: (x: boolean) => string;
declare const number_to_boolean: (x: number) => boolean;
declare const number_to_string: (x: number) => string;
declare const string_to_boolean: (x: string) => boolean;
declare const string_to_number: (x: string) => number;

declare const a_b_c_d_e_f_to_any: (
  a: null,
  b: undefined,
  c: boolean,
  d: number,
  e: string,
  f: object,
) => any;

// @dts-jest:pass -> (v1: boolean) => number
R_pipe(boolean_to_number);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => any
R_pipe(a_b_c_d_e_f_to_any);

// @dts-jest:pass -> (v1: string) => number
R_pipe(string_to_boolean, boolean_to_number);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => number
R_pipe(a_b_c_d_e_f_to_any, boolean_to_number);

// @dts-jest:pass -> (v1: number) => number
R_pipe(number_to_string, string_to_boolean, boolean_to_number);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => number
R_pipe(a_b_c_d_e_f_to_any, string_to_boolean, boolean_to_number);

// @dts-jest:pass -> (v1: string) => number
R_pipe(
  string_to_number,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => number
R_pipe(
  a_b_c_d_e_f_to_any,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);

// @dts-jest:pass -> (v1: boolean) => number
R_pipe(
  boolean_to_string,
  string_to_number,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => number
R_pipe(
  a_b_c_d_e_f_to_any,
  string_to_number,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);

// @dts-jest:pass -> (v1: number) => number
R_pipe(
  number_to_boolean,
  boolean_to_string,
  string_to_number,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);
// @dts-jest:pass -> (v1: null, v2: undefined, v3: boolean, v4: number, v5: string, v6: object) => number
R_pipe(
  a_b_c_d_e_f_to_any,
  boolean_to_string,
  string_to_number,
  number_to_string,
  string_to_boolean,
  boolean_to_number,
);
