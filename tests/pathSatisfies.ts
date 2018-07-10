import * as R from '../ramda/dist/index';

declare const string_to_boolean: (x: string) => boolean;
declare const path: R.Path;
declare const object: object;

// @dts-jest:pass:snap
R.pathSatisfies(string_to_boolean, path);
// @dts-jest:pass:snap
R.pathSatisfies(string_to_boolean)(path)(object);
// @dts-jest:pass:snap
R.pathSatisfies(string_to_boolean, path, object);
