import * as R_pick from '../ramda/dist/src/pick';

declare const object: object;
declare const string: string;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass -> Pick<object, string>
R_pick([string])(object);
// @dts-jest:pass -> Pick<object, string>
R_pick([string], object);

// @dts-jest:pass -> Pick<{ a: 1; b: 2; c: 3; }, "a" | "c">
R_pick(['a', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass -> Pick<{ a: 1; b: 2; c: 3; }, "a" | "c">
R_pick(['a', 'c'], a_1_b_2_c_3);
