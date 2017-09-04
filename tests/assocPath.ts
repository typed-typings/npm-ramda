import { Path } from '../ramda/dist/src/$types';
import R_assocPath = require('../ramda/dist/src/assocPath');

declare const path: Path;
declare const number_value: number;
declare const object: object;

// @dts-jest:pass:snap
R_assocPath(path, number_value, object);
// @dts-jest:pass:snap
R_assocPath(path)(number_value)(object);
