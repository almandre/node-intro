const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'log');
if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname);
}

const out = fs.createWriteStream(path.join(dirname, 'out.log'));
const err = fs.createWriteStream(path.join(dirname, 'err.log'));

const console2 = new console.Console(out, err);

console2.log(new Date());
console2.error(new Error('Whoops'));
