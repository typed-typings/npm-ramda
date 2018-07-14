import * as R from '../ramda/dist/index';

declare const property: R.Property;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R.hasIn(property);
// @dts-jest:pass:snap -> boolean
R.hasIn(property)(object);
// @dts-jest:pass:snap -> boolean
R.hasIn(property, object);
