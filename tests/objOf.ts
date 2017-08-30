import R_objOf = require('../ramda/dist/src/objOf');

declare const string: string;
declare const object: object;

// @dts-jest:pass:snap
R_objOf(string);
// @dts-jest:pass:snap
R_objOf(string, object);
// @dts-jest:pass:snap
R_objOf('key');
// @dts-jest:pass:snap
R_objOf('key', object);
