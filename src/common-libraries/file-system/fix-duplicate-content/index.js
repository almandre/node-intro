const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, 'files');
const files = fs.readdirSync(dirname);

for (const file of files) {
    const filepath = path.join(dirname, file);

    fs.stat(filepath, (err, stats) => {
        if (err) throw err;

        fs.truncate(filepath, stats.size / 2, (err) => {
            if (err) throw err;
        });
    });
}
