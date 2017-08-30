import R_dropRepeatsWith = require('../ramda/dist/src/dropRepeatsWith');

declare const string_to_number: (x: string) => number;
declare const string_array: string[];

// @dts-jest:pass:snap
R_dropRepeatsWith(string_to_number);
// @dts-jest:pass:snap
R_dropRepeatsWith(string_to_number)(string_array);
// @dts-jest:pass:snap
R_dropRepeatsWith(string_to_number, string_array);
