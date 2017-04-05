import * as fs from 'fs';
import * as path from 'path';
import * as assert from 'assert';

export const typeFail = (source: string, errorMatch?: RegExp) => {
  const dir = __dirname + '/tmp';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const filePath = path.join(dir, Math.random() + '.ts');
  fs.writeFileSync(filePath, source, 'utf-8');
  try {
    require(filePath);
    assert.ok(false, 'file imported without error');
  } catch (e) {
    if (errorMatch) {
      const tsErrorMessage = e.diagnostics[0].message;
      if (!tsErrorMessage.match(errorMatch)) {
        assert.ok(false,
          'file imported with error that does not have expected match:' +
          tsErrorMessage);
      }
    }
  }
  fs.unlinkSync(filePath);
};
