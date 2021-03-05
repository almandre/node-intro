const EventEmitter = require('events');
const fs = require('fs');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        this.emit('begin');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }

            this.emit('data', data);
            console.timeEnd('execute');
            this.emit('end');
        });
    }
}

const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));
withTime.on('error', console.error);

withTime.on('data', (data) => {
    console.log(`Length: ${data.length}`);
});

withTime.prependListener('data', (data) => {
    console.log(`Characters: ${data.toString().length}`);
});

setTimeout(() => withTime.execute(fs.readFile, ''), 0);
setTimeout(() => withTime.execute(fs.readFile, __filename), 100);
