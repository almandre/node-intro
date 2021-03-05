const http = require('http');

const { pid } = process;
let usersCount;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // Simulate CPU work
    res.write(`Handled by process ${pid}\n`);
    res.end(`Users: ${usersCount}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on('message', data => {
    const { usersCount: count } = data;

    usersCount = count;
});
