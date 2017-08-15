import * as R_objOf from '../ramda/dist/src/objOf';

declare const string: string;
declare const object: object;

// @dts-jest:pass -> <V>(value: V) => Record<string, V>
R_objOf(string);
// @dts-jest:pass -> Record<string, object>
R_objOf(string, object);
// @dts-jest:pass -> <V>(value: V) => Record<"key", V>
R_objOf('key');
// @dts-jest:pass -> Record<"key", object>
R_objOf('key', object);
