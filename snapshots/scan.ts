import * as R from '../ramda/dist/index';

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;

// @dts-jest:pass:snap -> (values: number[] | ArrayLike<number>) => object[]
R.scan(object_number_to_object, object);
// @dts-jest:pass:snap -> object[]
R.scan(object_number_to_object)(object)(number_array);
// @dts-jest:pass:snap -> object[]
R.scan(object_number_to_object, object, number_array);
