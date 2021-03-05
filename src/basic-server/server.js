// server: http.Server
const server = require('http').createServer();

server.on('request', (req, res) => {
    switch (req.url) {
        case '/api':
            res.writeHead(200, { 'content-type': 'application/json' });
            res.end(JSON.stringify({}));
            break;
        default:
            // res: http.ServerResponse
            res.writeHead(200, { 'content-type': 'text/plain' });
            res.end('Hello world\n');
    }
});

server.listen(3000);
