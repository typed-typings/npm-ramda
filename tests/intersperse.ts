import * as R from '../ramda/dist/index';

declare const object_array: object[];
declare const string: string;

// @dts-jest:pass:snap
R.intersperse(string);
// @dts-jest:pass:snap
R.intersperse(string, object_array);
// @dts-jest:pass:snap
R.intersperse(string)(object_array);
