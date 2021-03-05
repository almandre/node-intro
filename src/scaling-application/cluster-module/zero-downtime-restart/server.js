const http = require('http');

const { pid } = process;

http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // Simulate CPU work
    res.end(`Handled by process ${pid}\n`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});
