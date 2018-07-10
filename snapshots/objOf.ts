import * as R from '../ramda/dist/index';

declare const string: string;
declare const object: object;

// @dts-jest:pass:snap -> <V>(value: V) => Record<string, V>
R.objOf(string);
// @dts-jest:pass:snap -> Record<string, object>
R.objOf(string, object);
// @dts-jest:pass:snap -> <V>(value: V) => Record<"key", V>
R.objOf('key');
// @dts-jest:pass:snap -> Record<"key", object>
R.objOf('key', object);
