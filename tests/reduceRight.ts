import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const object: object;
declare const number_object_to_object: (val: number, acc: object) => object;

// @dts-jest:pass:snap
R.reduceRight(number_object_to_object, object);
// @dts-jest:pass:snap
R.reduceRight(number_object_to_object)(object)(number_array);
// @dts-jest:pass:snap
R.reduceRight(number_object_to_object, object, number_array);
