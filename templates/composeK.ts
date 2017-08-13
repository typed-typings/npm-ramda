import * as dts from 'dts-element';
import { max_curry_level } from './$curriedFunctions';
import { create_composition_declarations } from './utils/create-composition-declarations';

export default [
  ...dts.parse(`
    import {Chain} from './$types';
  `).members,
  ...create_composition_declarations(
    'composeK',
    'compose',
    max_curry_level,
    1,
    x => `Chain<${x}>`,
    x => `Chain<${x}>`,
  ),
];
