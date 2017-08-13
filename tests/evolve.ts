import { Morphism } from '../ramda/dist/src/$types';
import * as R_evolve from '../ramda/dist/src/evolve';

declare const a_1_b_2_c_3: { a: 1; b: 2; c: 3 };
declare const a_b_number_to_number: {
  a: Morphism<number, number>;
  b: Morphism<number, number>;
};

// @dts-jest:pass
R_evolve(a_b_number_to_number)(a_1_b_2_c_3);
// @dts-jest:pass
R_evolve(a_b_number_to_number, a_1_b_2_c_3);
