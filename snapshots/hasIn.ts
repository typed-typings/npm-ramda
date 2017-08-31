import { Property } from '../ramda/dist/src/$types';
import R_hasIn = require('../ramda/dist/src/hasIn');

declare const property: Property;
declare const object: object;

// @dts-jest:pass:snap -> (object: {}) => boolean
R_hasIn(property);
// @dts-jest:pass:snap -> boolean
R_hasIn(property)(object);
// @dts-jest:pass:snap -> boolean
R_hasIn(property, object);
