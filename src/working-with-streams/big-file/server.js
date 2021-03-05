const fs = require('fs');
const path = require('path');
const server = require('http').createServer();

const filename = 'big-file';
const filepath = path.join(__dirname, filename);

server.on('request', (req, res) => {
    // Inefficient way
    // fs.readFile(filepath, (err, data) => {
    //     if (err) throw err;

    //     res.end(data);
    // });

    const src = fs.createReadStream(filepath);
    src.pipe(res);
});

server.listen(3000);
