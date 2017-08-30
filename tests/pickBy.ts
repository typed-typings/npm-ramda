import R_pickBy = require('../ramda/dist/src/pickBy');

declare const number_string_object_to_boolean: (
  x: number,
  k: string,
  o: object,
) => boolean;
declare const string_string_object_to_boolean: (
  x: string,
  k: string,
  o: object,
) => boolean;
declare const string_number_record: Record<string, number>;
declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};

// @dts-jest:fail:snap
R_pickBy(string_string_object_to_boolean)(string_number_record);
// @dts-jest:fail:snap
R_pickBy(string_string_object_to_boolean, string_number_record);

// @dts-jest:fail:snap
R_pickBy(string_string_object_to_boolean)(a_1_b_2_c_3);
// @dts-jest:fail:snap
R_pickBy(string_string_object_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass:snap
R_pickBy(number_string_object_to_boolean)(string_number_record);
// @dts-jest:pass:snap
R_pickBy(number_string_object_to_boolean, string_number_record);

// @dts-jest:pass:snap
R_pickBy(number_string_object_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass:snap
R_pickBy(number_string_object_to_boolean, a_1_b_2_c_3);
