import * as fs from 'fs';
import * as path from 'path';

export const importInterfaces = (names: string[]) =>
  `import { ${names.join(', ')} } from '../interfaces';`;

export type FunParams = { [name: string]: string }[];

const parseFunParams = (params: FunParams) =>
  params.map(p => `${Object.keys(p)[0]}: ${p[Object.keys(p)[0]]}`);

export const docs = (description: string) =>
  ('/**\n' + description.trim()).split('\n').join('\n * ') + '\n */\n';

export const defineType = (type: string, def: string) =>
  `type ${type} = ${def};`;
;

const maxGeneratedLineSize = 75;

const joinWithMaxLineSize
  = (lines: string[], part: string): string[] => {
    const lastLine = lines[lines.length - 1];
    const isLineSizeAllowed =
      (lastLine + part).length < maxGeneratedLineSize || part.length < 5;
    return isLineSizeAllowed
      ? lines.slice(0, -1).concat((lastLine + part))
      : lines.slice(0, -1)
        .concat(lastLine.trim())
        .concat(part.replace(/^\s*/, ''));
  };

const addCommaExeptLast = (parts: string[]) =>
  parts.slice(0, -1).map(p => p + ', ')
    .concat(parts[parts.length - 1]);

export const declareFunction = (name: string,
  typeParams: string[],
  params: FunParams,
  result: string
): string => [`declare function ${name}<`,
...addCommaExeptLast(typeParams),
  `>`, `(`, ...addCommaExeptLast(parseFunParams(params)), `):`, ` ${result};`]
  .reduce(joinWithMaxLineSize, ['']).join('\n  ');

export const arrowFunction = (
  typeParams: string[],
  params: FunParams,
  result: string) => {
  return [`<`, ...addCommaExeptLast(typeParams),
    `>`, `(`, ...addCommaExeptLast(parseFunParams(params)), `) =>`, ` ${result}`]
    .reduce(joinWithMaxLineSize, ['']).join('\n  ');
};

export function getParamsNums(max: number) {
  return Array.from(Array(max + 1).keys()).map(i =>
    Array.from(Array(i + 1).keys()).slice(1)
  ).slice(1);
}

const zeroPad = (count: number) =>
  (str: string): string =>
    Array(count + 1).join('0')
      .substring(0, count - str.length) + str;

type Binary = 0 | 1;

const toBinaryArray = (length: number) =>
  (num: number) => zeroPad(length)(num.toString(2))
    .split('')
    .map(x => parseInt(x) as Binary);

const makeStringNumberCombination =
  (nums: number[]): (string | number)[][] =>
    Array.from(Array(Math.pow(2, nums.length)).keys())
      .map(toBinaryArray(nums.length))
      .map((binary) =>
        binary.map((x, index) => x ? (index + 1) : (index + 1).toString())
      );

export const makeParamsStringNumberCombination = (max: number) =>
  getParamsNums(max)
    .map(makeStringNumberCombination)
    .reduce((flat, props) => flat.concat(props), []);

export const addLetter = (letter = 'P') => (prop: string) =>
  parseInt(prop) ? letter + prop : prop;

export const makeNestedObjPath = (props: (string | number)[], init: string) =>
  props.concat([]).reverse().reduce<string>((prev, prop, index) =>
    typeof prop === 'string'
      ? `{[K${props.length - index} in ${addLetter()(prop)}]: ${prev}}`
      : `${prev}[]`
    , init);

export const makeTuple = (items: (string | number)[], size?: number) =>
  `[` + items.map(addLetter()).join(', ') + `]`
  + (size ? ` & { ${size}?: void }` : '');

const tplFiles = fs.readdirSync(__dirname + '/tpl');

const g = (global as any);
g.genFileCache = g.genFileCache || {};

describe('Generation', () => {
  tplFiles.forEach(tplFile => {
    const name = tplFile.replace(/\.ts$/, '');
    it(name, () => {
      const lines = require(__dirname + '/tpl/' + tplFile);
      const src =
        docs('This is auto generated source.') + '\n' +
        lines.concat(`export = ${name}`)
          .join('\n\n')
          .concat('\n');

      if (g.genFileCache[name] !== src) {
        fs.writeFileSync(__dirname + `/src/${name}.d.ts`, src);
        g.genFileCache[name] = src;
      }
    });
  });
});
