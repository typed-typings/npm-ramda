import { Dictionary } from '../ramda/dist/src/$types';
import R_where = require('../ramda/dist/src/where');

declare const dictionary_of_number_to_boolean: Dictionary<
  (x: number) => boolean
>;
declare const a_b_c_number_to_boolean: {
  a: (x: number) => boolean;
  b: (x: number) => boolean;
  c: (x: number) => boolean;
};
declare const number_dictionary: Dictionary<number>;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> (object: Dictionary<any>) => boolean
R_where(a_b_c_number_to_boolean);

// @dts-jest:pass:snap -> boolean
R_where(a_b_c_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass:snap -> boolean
R_where(a_b_c_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass:snap -> boolean
R_where(a_b_c_number_to_boolean)(number_dictionary);
// @dts-jest:pass:snap -> boolean
R_where(a_b_c_number_to_boolean, number_dictionary);

// @dts-jest:pass:snap -> (object: Dictionary<any>) => boolean
R_where(dictionary_of_number_to_boolean);

// @dts-jest:pass:snap -> boolean
R_where(dictionary_of_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass:snap -> boolean
R_where(dictionary_of_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass:snap -> boolean
R_where(dictionary_of_number_to_boolean)(number_dictionary);
// @dts-jest:pass:snap -> boolean
R_where(dictionary_of_number_to_boolean, number_dictionary);
