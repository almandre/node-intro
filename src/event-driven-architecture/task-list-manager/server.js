const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client) {
        super();
        this.id = 0;
        this.tasks = {};

        process.nextTick(() => {
            this.send('Type a command');
        });

        client.on('command', (cmd, args) => {
            switch (cmd) {
                case 'help':
                case 'add':
                case 'ls':
                case 'delete':
                    this[cmd](args);
                    break;
                default:
                    this.send('Invalid command');
            }
        });
    }

    help() {
        const msg = 'Available Commands:\nadd [task]\nls\ndelete [id]';
        this.send(msg);
    }

    toString() {
        const arr = Object.keys(this.tasks).map(key => (
            `${key}: ${this.tasks[key]}`
        ));

        return arr.join('\n');
    }

    add(args) {
        const task = args.join(' ');

        if (!task) {
            this.send('Task not typed');
            return;
        }

        this.id += 1;
        this.tasks[this.id] = task;

        this.send(`Task ${this.id} added`);
    }

    ls() {
        const list = this.toString();

        if (!list) {
            this.send('Empty list');
            return;
        }

        this.send(`${list}`);
    }

    delete(args) {
        const [id] = args;

        if (!(id in this.tasks)) {
            this.send('Task id not found');
            return;
        }

        delete this.tasks[id];

        this.send(`Task ${id} deleted`);
    }

    send(response) {
        this.emit('response', response);
    }
}

module.exports = (client) => new Server(client);
