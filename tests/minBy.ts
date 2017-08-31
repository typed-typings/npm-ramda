import R_minBy = require('../ramda/dist/src/minBy');

declare const object_to_number: (x: object) => number;
declare const object: object;

// @dts-jest:pass:snap
R_minBy(object_to_number, object);
// @dts-jest:pass:snap
R_minBy(object_to_number)(object)(object);
// @dts-jest:pass:snap
R_minBy(object_to_number, object, object);
