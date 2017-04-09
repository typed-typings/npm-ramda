/*
  Need to remove generated files before launching mocha in watch mode
*/
import * as fs from 'fs';

fs.readdirSync(__dirname + '/tpl')
  .map(file => 'src/' + file.replace(/\.ts/, '\.d.ts'))
  .filter(fs.existsSync)
  .forEach(fs.unlinkSync)