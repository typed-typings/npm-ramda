import * as R from '../ramda/dist/index';

declare const dictionary_of_number_to_boolean: R.Dictionary<
  (x: number) => boolean
>;
declare const a_b_c_number_to_boolean: {
  a: (x: number) => boolean;
  b: (x: number) => boolean;
  c: (x: number) => boolean;
};
declare const number_dictionary: R.Dictionary<number>;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:pass:snap -> (object: R.Dictionary<any>) => boolean
R.whereAny(a_b_c_number_to_boolean);

// @dts-jest:pass:snap -> boolean
R.whereAny(a_b_c_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass:snap -> boolean
R.whereAny(a_b_c_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass:snap -> boolean
R.whereAny(a_b_c_number_to_boolean)(number_dictionary);
// @dts-jest:pass:snap -> boolean
R.whereAny(a_b_c_number_to_boolean, number_dictionary);

// @dts-jest:pass:snap -> (object: R.Dictionary<any>) => boolean
R.whereAny(dictionary_of_number_to_boolean);

// @dts-jest:pass:snap -> boolean
R.whereAny(dictionary_of_number_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass:snap -> boolean
R.whereAny(dictionary_of_number_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass:snap -> boolean
R.where(dictionary_of_number_to_boolean)(number_dictionary);
// @dts-jest:pass:snap -> boolean
R.where(dictionary_of_number_to_boolean, number_dictionary);
