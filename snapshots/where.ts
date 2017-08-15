import { Dictionary } from '../ramda/dist/src/$types';
import * as R_where from '../ramda/dist/src/where';

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

// @dts-jest:pass -> (object: Dictionary<any>) => boolean
R_where(a_b_c_number_to_boolean);

// @dts-jest:pass -> boolean
R_where(a_b_c_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass -> boolean
R_where(a_b_c_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass -> boolean
R_where(a_b_c_number_to_boolean)(number_dictionary);
// @dts-jest:pass -> boolean
R_where(a_b_c_number_to_boolean, number_dictionary);

// @dts-jest:pass -> (object: Dictionary<any>) => boolean
R_where(dictionary_of_number_to_boolean);

// @dts-jest:pass -> boolean
R_where(dictionary_of_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass -> boolean
R_where(dictionary_of_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass -> boolean
R_where(dictionary_of_number_to_boolean)(number_dictionary);
// @dts-jest:pass -> boolean
R_where(dictionary_of_number_to_boolean, number_dictionary);
