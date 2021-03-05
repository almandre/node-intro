const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');

const files = fs.readdirSync(dirname);
const ms1Day = 24 * 60 * 60 * 1000;

for (const file of files) {
    const filepath = path.join(dirname, file);

    fs.stat(filepath, (err, stats) => {
        if (err) throw err;

        if ((Date.now() - stats.mtime.getTime() > 7 * ms1Day)) {
            fs.unlink(filepath, (err) => {
                if (err) throw err;

                console.log(`Deleted ${filepath}`);
            });
        }
    });
}
