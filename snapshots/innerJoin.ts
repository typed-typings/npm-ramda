import R_innerJoin = require('../ramda/dist/src/innerJoin');

declare const object_number_to_boolean: (x: object, y: number) => boolean;
declare const object_array: object[];
declare const number_array: number[];

// @dts-jest:pass:snap -> (ys: number[] | ArrayLike<number>) => object[]
R_innerJoin(object_number_to_boolean, object_array);
// @dts-jest:pass:snap -> object[]
R_innerJoin(object_number_to_boolean, object_array, number_array);
// @dts-jest:pass:snap -> object[]
R_innerJoin(object_number_to_boolean)(object_array)(number_array);
