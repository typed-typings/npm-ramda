import * as R_pickBy from '../ramda/dist/src/pickBy';

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

// @dts-jest:fail -> Argument of type 'Record<string, number>' is not assignable to parameter of type 'Dictionary<string>'.
R_pickBy(string_string_object_to_boolean)(string_number_record);
// @dts-jest:fail -> Argument of type 'Record<string, number>' is not assignable to parameter of type 'Dictionary<string>'.
R_pickBy(string_string_object_to_boolean, string_number_record);

// @dts-jest:fail -> Argument of type '{ a: 1; b: 2; c: 3; }' is not assignable to parameter of type 'Dictionary<string>'.
R_pickBy(string_string_object_to_boolean)(a_1_b_2_c_3);
// @dts-jest:fail -> Argument of type '{ a: 1; b: 2; c: 3; }' is not assignable to parameter of type 'Dictionary<string>'.
R_pickBy(string_string_object_to_boolean, a_1_b_2_c_3);

// @dts-jest:pass -> Partial<Dictionary<number>>
R_pickBy(number_string_object_to_boolean)(string_number_record);
// @dts-jest:pass -> Partial<Record<string, number>>
R_pickBy(number_string_object_to_boolean, string_number_record);

// @dts-jest:pass -> Partial<Dictionary<number>>
R_pickBy(number_string_object_to_boolean)(a_1_b_2_c_3);
// @dts-jest:pass -> Partial<{ a: 1; b: 2; c: 3; }>
R_pickBy(number_string_object_to_boolean, a_1_b_2_c_3);
