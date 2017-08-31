import R_groupBy = require('../ramda/dist/src/groupBy');

declare const object_to_string: (x: object) => string;
declare const object_array: object[];

// @dts-jest:pass:snap
R_groupBy(object_to_string);
// @dts-jest:pass:snap
R_groupBy(object_to_string)(object_array);
// @dts-jest:pass:snap
R_groupBy(object_to_string, object_array);
