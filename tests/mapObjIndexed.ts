import * as R from '../ramda/dist/index';

declare const number_string_object_to_boolean: (
  a: number,
  b: string,
  c: object,
) => boolean;

declare const a_1_b_2_c_3: {
  a: 1;
  b: 2;
  c: 3;
};
declare const string_number_record: Record<string, number>;

// @dts-jest:pass:snap
R.mapObjIndexed(number_string_object_to_boolean);
// @dts-jest:pass:snap
R.mapObjIndexed(number_string_object_to_boolean, string_number_record);
// @dts-jest:pass:snap
R.mapObjIndexed(number_string_object_to_boolean, a_1_b_2_c_3);
// @dts-jest:pass:snap
R.mapObjIndexed(R.__, a_1_b_2_c_3)(number_string_object_to_boolean);
