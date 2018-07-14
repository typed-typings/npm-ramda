import * as R from '../ramda/dist/index';

declare const path: R.Path;
declare const number_value: number;
declare const object: object;

// @dts-jest:pass:snap -> object
R.assocPath(path, number_value, object);
// @dts-jest:pass:snap -> object
R.assocPath(path)(number_value)(object);
