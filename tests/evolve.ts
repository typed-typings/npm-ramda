import * as R from '../ramda/dist/index';

declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const a_b_number_to_number: {
  a: R.Morphism<number, number>;
  b: R.Morphism<number, number>;
};

// @dts-jest:pass:snap
R.evolve(a_b_number_to_number)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R.evolve(a_b_number_to_number, a_1_b_2_c_3);
