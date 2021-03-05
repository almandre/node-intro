/**
* process.nextTick is not part of event loop,
* Node process the callback registered with nextTick after
* the current operation completes and before event loop continues.
*
* In this example using nextTick the error handler is async and
* keep the same design for all function.
*/
const fs = require('fs');

function fileSize(fileName, cb) {
    if (typeof fileName !== 'string') {
        return process.nextTick(cb, new TypeError('argument should be string'));
    }

    fs.stat(fileName, (err, stats) => {
        if (err) {
            return cb(err);
        }

        cb(null, stats.size);
    });
}

fileSize(__filename, (err, size) => {
    if (err) throw err;

    console.log(`Size in KB: ${size / 1024}`);
});

// Hello message is displayed first than fileSize message
console.log('Hello');
