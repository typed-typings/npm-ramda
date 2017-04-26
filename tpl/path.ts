import {
  importInterfaces,
  declareFunction,
  arrowFunction,
  makeParamStringNumberCombinations,
  makeNestedObjPath,
  makeTuple, docs
} from '../gen';

const maxPathDepth = 5;

const propsParams =
  makeParamStringNumberCombinations(maxPathDepth);

const desc = `Retrieve the value at a given path. 
Note: Tuples are not supported by typings. 
Max path depth typed is ${maxPathDepth}.`;

module.exports = [
  ...propsParams.map((props) =>
    docs(desc) +
    declareFunction('path',
      props.map(n => `P${n} extends ${typeof n}`)
        .concat(`T`),
      [
        { path: makeTuple(props, props.length) },
        {
          obj: makeNestedObjPath(props, 'T')
        }
      ],
      `T`
    )),
  `// curried`,
  ...propsParams.map((props) =>
    docs(desc) +
    declareFunction('path',
      props.map(n => `P${n} extends ${typeof n}`)
        .concat(`T`),
      [
        { path: makeTuple(props, props.length) }
      ],
      arrowFunction([`T`], [
        {
          obj: makeNestedObjPath(props, 'T')
        }
      ], 'T'
      )
    ))
];
