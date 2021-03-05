const dgram = require('dgram');
const { PORT, HOST } = require('./server');

const client = dgram.createSocket('udp4');

client.send('Hello', PORT, HOST, err => {
    if (err) throw err;

    console.log('UDP Message sent');
    client.close();
});
