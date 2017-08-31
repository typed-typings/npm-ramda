import R_isEmpty = require('../ramda/dist/src/isEmpty');

declare const string: string;

// @dts-jest:pass:snap -> boolean
R_isEmpty(string);
