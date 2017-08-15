import * as dts from 'dts-element';
import { create_composition_declarations } from '../create-composition-declarations';

const emit_composition_declarations = (kind: 'pipe' | 'compose') => {
  const curried_interfaces = create_composition_declarations(
    'test',
    kind,
    3,
    3,
    x => `G<${x}>`,
    x => `R<${x}>`,
  );
  const top_level_element = dts.create_top_level_element({
    members: curried_interfaces,
  });
  return dts.emit(top_level_element);
};

it('should generate correctly for pipe', () => {
  expect(emit_composition_declarations('pipe')).toMatchSnapshot();
});

it('should generate correctly for compose', () => {
  expect(emit_composition_declarations('compose')).toMatchSnapshot();
});
