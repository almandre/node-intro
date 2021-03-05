/* eslint-disable no-unused-vars */
const fs = require('fs');

// Asynchronous Form:
fs.readFile(__filename, (err, data) => {
    if (err) throw err;

    // Do something with data
});

// Synchronous Form:
const data = fs.readFileSync(__filename);
