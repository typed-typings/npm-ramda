import R_init = require('../ramda/dist/src/init');

declare const string: string;
declare const string_array: string[];

// @dts-jest:pass:snap
R_init(string);
// @dts-jest:pass:snap
R_init(string_array);
