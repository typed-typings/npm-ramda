import { Path } from '../ramda/dist/src/$types';
import R_pathSatisfies = require('../ramda/dist/src/pathSatisfies');

declare const string_to_boolean: (x: string) => boolean;
declare const path: Path;
declare const object: object;

// @dts-jest:pass:snap
R_pathSatisfies(string_to_boolean, path);
// @dts-jest:pass:snap
R_pathSatisfies(string_to_boolean)(path)(object);
// @dts-jest:pass:snap
R_pathSatisfies(string_to_boolean, path, object);
