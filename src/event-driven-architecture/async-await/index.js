const fs = require('fs');

const readFileAsArray = file => new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            return reject(err);
        }

        const lines = data.toString().trim().split('\n');
        resolve(lines);
    });
});

const countOdd = async () => {
    try {
        const lines = await readFileAsArray('./numbers');
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);

        console.log('odd numbers count:', oddNumbers.length);
    } catch (err) {
        console.error(err);
    }
};

countOdd();
