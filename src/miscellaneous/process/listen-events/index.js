/* eslint-disable no-unused-vars */
process.on('exit', data => {
    // Do one final synchronous operation before the node process terminates
    // We can't use event loop here
});

process.on('uncaughtException', err => {
    // Something went unhandled, do any cleanup and exit anyway
    console.error(err);

    // FORCE exit the process too.
    process.exit(1);
});

// Keep the event loop busy
process.stdin.resume();

// Trigger a TypeError exception
console.wrong();
