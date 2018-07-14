import * as R from '../ramda/dist/index';

declare const object_number_to_boolean: (x: object, y: number) => boolean;
declare const object_array: object[];
declare const number_array: number[];

// @dts-jest:pass:snap
R.innerJoin(object_number_to_boolean, object_array);
// @dts-jest:pass:snap
R.innerJoin(object_number_to_boolean, object_array, number_array);
// @dts-jest:pass:snap
R.innerJoin(object_number_to_boolean)(object_array)(number_array);
