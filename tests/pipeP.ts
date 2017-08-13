import * as R_pipeP from '../ramda/dist/src/pipeP';

declare const boolean_to_number_promise: (x: boolean) => Promise<number>;
declare const boolean_to_string_promise: (x: boolean) => Promise<string>;
declare const number_to_boolean_promise: (x: number) => Promise<boolean>;
declare const number_to_string_promise: (x: number) => Promise<string>;
declare const string_to_boolean_promise: (x: string) => Promise<boolean>;
declare const string_to_number_promise: (x: string) => Promise<number>;

declare const a_b_c_d_e_f_to_any_promise: (
  a: null,
  b: undefined,
  c: boolean,
  d: number,
  e: string,
  f: object,
) => Promise<any>;

// @dts-jest:pass
R_pipeP(boolean_to_number_promise);
// @dts-jest:pass
R_pipeP(a_b_c_d_e_f_to_any_promise);

// @dts-jest:pass
R_pipeP(string_to_boolean_promise, boolean_to_number_promise);
// @dts-jest:pass
R_pipeP(a_b_c_d_e_f_to_any_promise, boolean_to_number_promise);

// @dts-jest:pass
R_pipeP(
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);
// @dts-jest:pass
R_pipeP(
  a_b_c_d_e_f_to_any_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);

// @dts-jest:pass
R_pipeP(
  string_to_number_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);
// @dts-jest:pass
R_pipeP(
  a_b_c_d_e_f_to_any_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);

// @dts-jest:pass
R_pipeP(
  boolean_to_string_promise,
  string_to_number_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);
// @dts-jest:pass
R_pipeP(
  a_b_c_d_e_f_to_any_promise,
  string_to_number_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);

// @dts-jest:pass
R_pipeP(
  number_to_boolean_promise,
  boolean_to_string_promise,
  string_to_number_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);
// @dts-jest:pass
R_pipeP(
  a_b_c_d_e_f_to_any_promise,
  boolean_to_string_promise,
  string_to_number_promise,
  number_to_string_promise,
  string_to_boolean_promise,
  boolean_to_number_promise,
);
