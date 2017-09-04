import { Property } from '../ramda/dist/src/$types';
import R_has = require('../ramda/dist/src/has');

declare const property: Property;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R_has(property);
// @dts-jest:pass:snap -> boolean
R_has(property)(object);
// @dts-jest:pass:snap -> boolean
R_has(property, object);
