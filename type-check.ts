import * as ts from 'typescript';
import * as fs from 'fs';
import * as path from 'path';

const options: ts.CompilerOptions = ts.readConfigFile('tsconfig.json', ts.sys.readFile)
  .config.compilerOptions || {};
const host = ts.createCompilerHost(options, true);

const testDir = 'test'
const checkCallMatch = /^t\.is/

const tsFiles = fs.readdirSync(testDir)
  .map(fileName => path.join(testDir, fileName))

const program = ts.createProgram(tsFiles, options, host);
const checker = program.getTypeChecker();
const getType = (node: ts.Node) =>
  checker.typeToString(checker.getTypeAtLocation(node));

tsFiles.forEach(tsFile => {
  const source = program.getSourceFile(tsFile);
  const traverseNodes = (node: ts.Node) => {
    node.getChildren().forEach(child => {
      if (child.getText().match(checkCallMatch)) {
        if (child.kind === ts.SyntaxKind.CallExpression) {
          const argsNode = child.getChildren()[2];
          const firstArg = argsNode.getChildren()[0];
          const secondArg = argsNode.getChildren()[2];
          const firstArgType = getType(firstArg);
          const secondArgType = getType(secondArg);
          if (firstArgType !== secondArgType) {
            var pos = source.getLineAndCharacterOfPosition(child.pos)
            throw new Error(
              `Types of arguments do not match in \`${child.getText()}\`\n` +
              `${tsFile}:${pos.line},${pos.character}\n` +
              `\`${firstArg.getText()}\` has type \`${firstArgType}\` ` +
              `and \`${secondArg.getText()}\` has type \`${secondArgType}\``
            );
          }
        }
      }
      traverseNodes(child);
    });
  };
  traverseNodes(source);
});
