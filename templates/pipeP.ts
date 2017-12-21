import { max_curry_level } from './$curriedFunctions';
import { create_composition_declarations } from './utils/create-composition-declarations';

export default create_composition_declarations(
  'pipeP',
  'pipe',
  max_curry_level,
  6,
  x => x,
  (x, i) => (i === 0 ? `PromiseLike<${x}>` : `PromiseLike<${x}> | ${x}`),
  x => `PromiseLike<${x}>`,
);
