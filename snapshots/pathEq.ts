import { Path } from '../ramda/dist/src/$types';
import R_pathEq = require('../ramda/dist/src/pathEq');

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R_pathEq(path, number);
// @dts-jest:pass:snap -> boolean
R_pathEq(path)(number)(object);
// @dts-jest:pass:snap -> boolean
R_pathEq(path, number, object);
