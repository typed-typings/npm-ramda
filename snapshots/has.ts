import * as R from '../ramda/dist/index';

declare const property: R.Property;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R.has(property);
// @dts-jest:pass:snap -> boolean
R.has(property)(object);
// @dts-jest:pass:snap -> boolean
R.has(property, object);
