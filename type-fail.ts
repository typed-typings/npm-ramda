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
  let noError = false;
  try {
    require(filePath);
    noError = true;
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
  if (noError) {
    assert.ok(false, 'file imported without error');
  }

};

export const itFailsType = (name: string, src: string, errorMatch?: RegExp) =>
  it('ts error: ' + name, () => {
    typeFail(src, errorMatch);
  });
