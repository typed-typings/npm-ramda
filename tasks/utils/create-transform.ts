import * as gulp_util from 'gulp-util';
import * as through from 'through2';

export function create_transform(transformer: (filename: string) => string) {
  return through.obj((file: gulp_util.File, _encoding, callback) => {
    if (file.isNull()) {
      callback(null, file);
      return;
    }
    if (!file.isBuffer()) {
      callback(new Error('Support buffer only.'));
      return;
    }
    try {
      const transformed = transformer(file.path);
      file.contents = new Buffer(transformed);
      callback(null, file);
    } catch (e) {
      callback(e);
    }
  });
}
