import * as R_pickAll from '../ramda/dist/src/pickAll';

declare const object: object;
declare const string: string;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass -> object
R_pickAll([string])(object);
// @dts-jest:pass -> object
R_pickAll([string], object);

// @dts-jest:pass -> Partial<{ a: 1; b: 2; c: 3; }>
R_pickAll(['a', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass -> Pick<{ a: 1; b: 2; c: 3; }, "a" | "c">
R_pickAll(['a', 'c'], a_1_b_2_c_3);

// @dts-jest:pass -> Partial<{ a: 1; b: 2; c: 3; }>
R_pickAll(['a', 'c', 'f'])(a_1_b_2_c_3);
// @dts-jest:pass -> Partial<{ a: 1; b: 2; c: 3; }>
R_pickAll(['a', 'c', 'f'], a_1_b_2_c_3);
