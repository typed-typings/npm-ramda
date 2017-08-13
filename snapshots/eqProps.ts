import { Property } from '../ramda/dist/src/$types';
import * as R_eqProps from '../ramda/dist/src/eqProps';

declare const property: Property;
declare const string: string;

// @dts-jest:pass -> (b: string) => boolean
R_eqProps(property, string);
// @dts-jest:pass -> boolean
R_eqProps(property)(string, string);
// @dts-jest:pass -> boolean
R_eqProps(property, string, string);
