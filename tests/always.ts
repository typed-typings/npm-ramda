import R_always = require('../ramda/dist/src/always');

declare const string: string;

// @dts-jest:pass:snap
R_always(string);
// @dts-jest:pass:snap
R_always(string)();
