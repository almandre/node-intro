/* eslint-disable no-param-reassign */
const server = require('net').createServer();

const sockets = [];
let counter = 0;

const timestamp = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
};

server.on('connection', socket => {
    socket.id = ++counter;

    console.log('Client connected');
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}!\n`);
            sockets[socket.id] = socket;
            return;
        }

        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return;

            cs.write(`${socket.name} ${timestamp()}: `);
            cs.write(data);
        });
    });

    socket.on('end', () => {
        delete sockets[socket.id];
        console.log('Client disconnected');
    });

    socket.setEncoding('utf-8');
});

server.listen(3000, () => console.log('Server bound'));
