const { promisify } = require('util');

function getRandomArbitrary(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}

const delay = (seconds, callback) => {
    if (seconds > 5) {
        callback(new Error(`${seconds} seconds it too long!`));
    } else {
        setTimeout(() => {
            callback(null, `The ${seconds} second delay is over.`);
        }, seconds * 1000);
    }
};

const promiseDelay = promisify(delay);

promiseDelay(getRandomArbitrary(10))
    .then(console.log)
    .catch(err => console.log(`err: ${err.message}`));
