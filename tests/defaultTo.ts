import R_defaultTo = require('../ramda/dist/src/defaultTo');

declare const string: string;
declare const number_or_undefined: number | undefined;

// @dts-jest:pass:snap
R_defaultTo(string)(undefined);
// @dts-jest:pass:snap
R_defaultTo(string, undefined);
// @dts-jest:pass:snap
R_defaultTo(string)(number_or_undefined);
// @dts-jest:pass:snap
R_defaultTo(string, number_or_undefined);
