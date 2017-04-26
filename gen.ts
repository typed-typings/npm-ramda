import * as fs from 'fs';
import * as path from 'path';

export const importInterfaces = (names: string[]) =>
  `import { ${names.join(', ')} } from '../interfaces';`;

export type MethodParams = { [name: string]: string }[];

const parseFunParams = (params: MethodParams) =>
  params.map(p => `${Object.keys(p)[0]}: ${p[Object.keys(p)[0]]}`);

export const docsLines = (description: string) =>
  (['/**']).concat(
    description.trim().split('\n').map(d => ' * ' + d)
  ).concat('*/');


export const docs = (description: string) =>
  ('/**\n' + description.trim()).split('\n').join('\n * ') + '\n */\n';

export const defineType = (type: string, def: string) =>
  `type ${type} = ${def};`;

const isArray = Array.isArray
const isString = (obj: any) => typeof obj === 'string'

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
  params: MethodParams,
  result: string
): string => [`declare function ${name}<`,
...addCommaExeptLast(typeParams),
  `>`, `(`, ...addCommaExeptLast(parseFunParams(params)), `):`, ` ${result};`]
  .reduce(joinWithMaxLineSize, ['']).join('\n  ');

export const arrowFunction = (
  typeParams: string[],
  params: MethodParams,
  result: string) => {
  return [`<`, ...addCommaExeptLast(typeParams),
    `>`, `(`, ...addCommaExeptLast(parseFunParams(params)), `) =>`, ` ${result}`]
    .reduce(joinWithMaxLineSize, ['']).join('\n  ');
};

export function makeParamStringNumbers(max: number) {
  return Array.from(Array(max + 1).keys()).map(i =>
    Array.from(Array(i + 1).keys()).slice(1)
      .map(x => x.toString())
  ).slice(1);
}

const zeroPad = (count: number) =>
  (str: string): string =>
    Array(count + 1).join('0')
      .substring(0, count - str.length) + str;

const spacePadding = (count: number) =>
  Array((count + 1)).join('  ')


type Binary = 0 | 1;

const toBinaryArray = (length: number) =>
  (num: number) => zeroPad(length)(num.toString(2))
    .split('')
    .map(x => parseInt(x) as Binary);

const makeStringNumberCombination =
  (nums: string[]): (string | number)[][] =>
    Array.from(Array(Math.pow(2, nums.length)).keys())
      .map(toBinaryArray(nums.length))
      .map((binary) =>
        binary.map((x, index) => x ? (index + 1) : (index + 1).toString())
      );

export const makeParamStringNumberCombinations = (max: number) =>
  makeParamStringNumbers(max)
    .map(makeStringNumberCombination)
    .reduce((flat, props) => flat.concat(props), []);

export const addLetter = (letter = 'P') => (prop: string) =>
  parseInt(prop) ? letter + prop : prop;

/**
 * Makes nestes path like {[K1 in P1]: {[K2 in P2]: T[]}}): T 
 * for "1"(string), "2" (string), 3 (number)
 */
export const makeNestedObjPath = (props: (string | number)[], T: string) =>
  props.concat([]).reverse().reduce<string>((prev, prop, index) =>
    typeof prop === 'string'
      ? `{[K${props.length - index} in ${addLetter()(prop)}]: ${prev}}`
      : `${prev}[]`
    , T);

export const makeTuple = (items: (string | number)[], size?: number) =>
  `[` + items.map(addLetter()).join(', ') + `]`
  + (size ? ` & { ${size}?: void }` : '');

const tplFiles = fs.readdirSync(__dirname + '/tpl');

export type MethodSignature = {
  d?: string,
  t?: string[],
  p?: MethodParams,
  r: string | MethodSignature | MethodSignature[]
};

export type MethodInterface = MethodSignature[];

export type Template = {
  imports?: string[],
  signatures: MethodSignature[] | MethodSignature[][]
};

const capitalizeFirstLetter = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);


export function methodSignature(
  docs: string,
  types: string[],
  params: MethodParams,
  result: string | MethodSignature | MethodSignature[]): MethodSignature {
  return {
    d: docs, t: types, p: params, r: result
  }
}

const g = (global as any);
g.genFileCache = g.genFileCache || {};

const genarateSignature = (sig: MethodSignature, padding: number): string => {
  return (sig.d ? docsLines(sig.d) : []).concat((
    (sig.t && sig.t.length)
      ? [`<`, ...addCommaExeptLast(sig.t), `>`] : []
  ).concat(
    [`(`, ...addCommaExeptLast(parseFunParams(sig.p || [])), `):`]
    ).concat(
    typeof (sig.r) === 'string' ? [` ${sig.r};`]
      : [
        ` {\n`,
        ` ${generateSignatures(isArray(sig.r) ? sig.r : [sig.r], padding + 1)}`,
        `\n${spacePadding(padding)}}`
      ]
    )
    .reduce(joinWithMaxLineSize, ['']))
    .join('\n' + spacePadding(padding));
};

const reduceFlatten = <T>(flat: T[], props: T | T[]) =>
  flat.concat(props)

const generateSignatures =
  (signatures: MethodSignature[], padding = 1) =>
    spacePadding(padding) + signatures.map(sig => genarateSignature(sig, padding))
      .join('\n' + spacePadding(padding));


describe('Generation', () => {
  tplFiles.forEach(tplFile => {
    const name = tplFile.replace(/\.ts$/, '');
    it(name, () => {
      const tpl = require(__dirname + '/tpl/' + tplFile);
      let lines: string[] = [];
      // TODO handle empty tlp
      if (tpl.signatures) {
        // TODO: remove this nesting and flattening
        const signatures: MethodSignature[] =
          isArray(tpl.signatures[0]) ?
            tpl.signatures.reduce(reduceFlatten)
            : tpl.signatures;
        const interfaceName = capitalizeFirstLetter(name);
        lines.push(`interface ${interfaceName} {`);
        lines.push(generateSignatures(signatures));
        lines.push(`}`);
        lines = [lines.join('\n')];
        if (tpl.imports) {
          lines.unshift(importInterfaces(tpl.imports));
        }
        lines.push(`declare const ${name}: ${interfaceName}`);
      } else {
        lines = tpl as string[];
      }
      const src =
        docs('This is auto generated source.') + '\n' +
        lines.concat(`export = ${name} `)
          .join('\n\n')
          .concat('\n');
      if (g.genFileCache[name] !== src) {
        fs.writeFileSync(__dirname + `/src/${name}.d.ts`, src);
        g.genFileCache[name] = src;
      }
    });
  });
});
