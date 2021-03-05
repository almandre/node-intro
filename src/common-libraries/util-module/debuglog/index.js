const util = require('util');

const debuglog = util.debuglog('web');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Only display if the script was executed with NODE_DEBUG = web
    debuglog('HTTP Request: %s', req.url);
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('Hello world\n');
});

server.listen(3000);
