const fs = require('fs');
const path = require('path');

const filename = 'big-file';

if (!fs.existsSync(filename)) {
    const filepath = path.join(__dirname, filename);
    const file = fs.createWriteStream(filepath);

    for (let i = 0; i <= 1e6; i++) {
        file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
    }

    file.end();
}
