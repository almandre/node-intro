const fs = require('fs');
const { promisify } = require('util');
const path = require('path');

const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const filesdir = path.join(__dirname, 'files');
const filepath = (filename) => path.join(filesdir, filename);

const delay = seconds => new Promise(resolve => {
  setTimeout(() => {
    resolve(`The ${seconds} second delay is over.`);
  }, seconds * 1000);
});

fs.mkdirSync(filesdir);

Promise.race([
    writeFile(filepath('readme.md'), 'Hello'),
    delay(3),
    writeFile(filepath('readme.txt'), 'Hello'),
    delay(5),
    writeFile(filepath('readme.json'), '{ "Greeting": "Hello" }'),
]).then(() => readdir(filesdir))
  .then(console.log);
