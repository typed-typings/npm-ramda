import R_reduceWhile = require('../ramda/dist/src/reduceWhile');

declare const number_array: number[];
declare const object: object;
declare const object_number_to_object: (acc: object, val: number) => object;
declare const object_number_to_boolean: (acc: object, val: number) => boolean;

// @dts-jest:pass:snap
R_reduceWhile(object_number_to_boolean, object_number_to_object, object);
// @dts-jest:pass:snap
R_reduceWhile(object_number_to_boolean)(object_number_to_object)(object)(
  number_array,
);
// @dts-jest:pass:snap
R_reduceWhile(
  object_number_to_boolean,
  object_number_to_object,
  object,
  number_array,
);
