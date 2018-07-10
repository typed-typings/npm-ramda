import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest:pass:snap -> (values: R.List<number>) => object
R.reduce(object_number_to_object, object);
// @dts-jest:pass:snap -> object
R.reduce(object_number_to_object)(object)(number_array);
// @dts-jest:pass:snap -> object
R.reduce(object_number_to_object, object, number_array);
