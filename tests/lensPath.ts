import { Path } from '../ramda/dist/src/$types';
import R_lensPath = require('../ramda/dist/src/lensPath');

declare const path: Path;

// @dts-jest:pass:snap
R_lensPath(path);
// @dts-jest:pass:snap
R_lensPath<object, number[]>(path);
