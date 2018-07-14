import * as R from '../ramda/dist/index';

declare const string: string;
declare const object: object;

// @dts-jest:pass:snap
R.objOf(string);
// @dts-jest:pass:snap
R.objOf(string, object);
// @dts-jest:pass:snap
R.objOf('key');
// @dts-jest:pass:snap
R.objOf('key', object);
