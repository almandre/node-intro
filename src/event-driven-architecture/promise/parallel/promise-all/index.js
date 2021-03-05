const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const filesdir = path.join(__dirname, 'files');
const filepath = (filename) => path.join(filesdir, filename);

fs.mkdirSync(filesdir);

Promise.all([
    writeFile(filepath('readme.md'), 'Hello'),
    writeFile(filepath('readme.txt'), 'Hello'),
    writeFile(filepath('readme.json'), '{ "Greeting": "Hello" }'),
]).then(() => readdir(filesdir))
  .then(console.log);
