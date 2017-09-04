import R_reduceBy = require('../ramda/dist/src/reduceBy');

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;
declare const number_to_string: (x: number) => string;
declare const number_to_a_b_c: (x: number) => 'a' | 'b' | 'c';

// @dts-jest:pass:snap -> (values: number[] | ArrayLike<number>) => Partial<Record<string, object>>
R_reduceBy(object_number_to_object, object, number_to_string);
// @dts-jest:pass:snap -> Partial<Record<string, object>>
R_reduceBy(object_number_to_object)(object)(number_to_string)(number_array);
// @dts-jest:pass:snap -> Partial<Record<string, object>>
R_reduceBy(object_number_to_object, object, number_to_string, number_array);

// @dts-jest:pass:snap -> (values: number[] | ArrayLike<number>) => Partial<Record<"a" | "b" | "c", object>>
R_reduceBy(object_number_to_object, object, number_to_a_b_c);
// @dts-jest:pass:snap -> Partial<Record<"a" | "b" | "c", object>>
R_reduceBy(object_number_to_object)(object)(number_to_a_b_c)(number_array);
// @dts-jest:pass:snap -> Partial<Record<"a" | "b" | "c", object>>
R_reduceBy(object_number_to_object, object, number_to_a_b_c, number_array);
