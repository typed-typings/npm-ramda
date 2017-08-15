import * as R_objOf from '../ramda/dist/src/objOf';

declare const string: string;
declare const object: object;

// @dts-jest:pass
R_objOf(string);
// @dts-jest:pass
R_objOf(string, object);
// @dts-jest:pass
R_objOf('key');
// @dts-jest:pass
R_objOf('key', object);
