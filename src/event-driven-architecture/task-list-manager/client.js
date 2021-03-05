const EventEmitter = require('events');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const client = new EventEmitter();
const server = require('./server')(client);

server.on('response', (res) => {
    process.stdout.write('\u001B[2J\u001B[0;0f');
    process.stdout.write(res);
    process.stdout.write('\n> ');
});

let cmd;
let args;
rl.on('line', (input) => {
    [cmd, ...args] = input.split(' ');
    client.emit('command', cmd, args);
});
