const fs = require('fs');

fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);

    // setImmediate is displayed first than setTimeout.
    setImmediate(() => {
        console.log('immediate');
    });
});
