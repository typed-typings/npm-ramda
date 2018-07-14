import * as R from '../ramda/dist/index';

declare const property: R.Property;
declare const object: object;

// @dts-jest:pass:snap
R.has(property);
// @dts-jest:pass:snap
R.has(property)(object);
// @dts-jest:pass:snap
R.has(property, object);
