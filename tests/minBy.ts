import * as R from '../ramda/dist/index';

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest:pass:snap
R.minBy(object_to_number, object);
// @dts-jest:pass:snap
R.minBy(object_to_number)(object)(object);
// @dts-jest:pass:snap
R.minBy(object_to_number, object, object);
