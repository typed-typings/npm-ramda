import { Property } from '../ramda/dist/src/$types';
import R_eqProps = require('../ramda/dist/src/eqProps');

declare const property: Property;
declare const string: string;

// @dts-jest:pass:snap
R_eqProps(property, string);
// @dts-jest:pass:snap
R_eqProps(property)(string, string);
// @dts-jest:pass:snap
R_eqProps(property, string, string);
