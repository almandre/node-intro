const { Readable } = require('stream');

// Inefficient way
// const inStream = new Readable();

// inStream.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// inStream.push(null);

const inStream = new Readable({
    // eslint-disable-next-line no-unused-vars
    read(size) {
        setTimeout(() => {
            this.push(String.fromCharCode(this.currentCharCode++));
            if (this.currentCharCode > 90) {
                this.push(null);
            }
        }, 100);
    },
});

inStream.currentCharCode = 65;

inStream.pipe(process.stdout);
