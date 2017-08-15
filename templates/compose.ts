import { max_curry_level } from './$curriedFunctions';
import { create_composition_declarations } from './utils/create-composition-declarations';

export default create_composition_declarations(
  'compose',
  'compose',
  max_curry_level,
  max_curry_level,
);
