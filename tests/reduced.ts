import * as R from '../ramda/dist/index';

declare const object: object;
declare const reduced_object: R.Reduced<object>;

// @dts-jest:pass:snap
R.reduced(object);
// @dts-jest:pass:snap
R.reduced(reduced_object);
