import { Path } from '../ramda/dist/src/$types';
import * as R_assocPath from '../ramda/dist/src/assocPath';

declare const path: Path;
declare const number_value: number;
declare const object: object;

// @dts-jest:pass -> object
R_assocPath(path, number_value, object);
// @dts-jest:pass -> object
R_assocPath(path)(number_value)(object);
