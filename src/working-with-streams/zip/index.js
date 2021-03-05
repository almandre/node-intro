const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const { Transform } = require('stream');

const filename = 'test.file';
const filepath = path.join(__dirname, filename);

const progress = new Transform({
    transform(chunk, encoding, callback) {
        process.stdout.write('.');
        callback(null, chunk);
    },
});

fs.writeFileSync(filepath);

fs.createReadStream(filepath)
    .pipe(zlib.createGzip())
    .pipe(progress)
    .pipe(fs.createWriteStream(`${filepath}.gz`))
    .on('finish', () => console.log('Done'));
