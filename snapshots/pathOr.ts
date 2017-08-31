import { Path } from '../ramda/dist/src/$types';
import R_pathOr = require('../ramda/dist/src/pathOr');

declare const path: Path;
declare const number: number;
declare const object: object;

// @dts-jest:pass:snap -> <U>(object: {}) => number | U
R_pathOr(number, path);

// @dts-jest:pass:snap -> number | {}
R_pathOr(number)(path)(object);
// @dts-jest:pass:snap -> number | {}
R_pathOr(number, path, object);
