const server = require('net').createServer();

server.on('connection', socket => {
    console.log('Client connected');
    socket.write('Welcome new client!\n');

    socket.on('data', data => {
        console.log('data is:', data);
        socket.write('data is: ');
        socket.write(data);
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.setEncoding('utf-8');
});

server.listen(3000, () => console.log('Server bound'));
