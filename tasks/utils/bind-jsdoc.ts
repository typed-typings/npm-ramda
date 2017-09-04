import * as dts from 'dts-element';
import { load_markdown } from './load-markdown';

export const bind_jsdoc = (filename: string, element: dts.IElement<any>) => {
  element.jsdoc = load_markdown(filename);
};
