import * as R_reduceRight from '../ramda/dist/src/reduceRight';

declare const number_array: number[];
declare const object: object;
declare const number_object_to_object: (val: number, acc: object) => object;

// @dts-jest:pass:snap
R_reduceRight(number_object_to_object, object);
// @dts-jest:pass:snap
R_reduceRight(number_object_to_object)(object)(number_array);
// @dts-jest:pass:snap
R_reduceRight(number_object_to_object, object, number_array);
