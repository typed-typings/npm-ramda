import * as R from '../ramda/dist/index';

declare const object: object;
declare const string: string;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> object
R.pickAll([string])(object);
// @dts-jest:pass:snap -> object
R.pickAll([string], object);

// @dts-jest:pass:snap -> Partial<{ a: 1; b: 2; c: 3; }>
R.pickAll(['a', 'c'])(a_1_b_2_c_3);
// @dts-jest:pass:snap -> Pick<{ a: 1; b: 2; c: 3; }, "a" | "c">
R.pickAll(['a', 'c'], a_1_b_2_c_3);

// @dts-jest:pass:snap -> Partial<{ a: 1; b: 2; c: 3; }>
R.pickAll(['a', 'c', 'f'])(a_1_b_2_c_3);
// @dts-jest:pass:snap -> Partial<{ a: 1; b: 2; c: 3; }>
R.pickAll(['a', 'c', 'f'], a_1_b_2_c_3);
