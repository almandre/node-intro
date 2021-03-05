function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const delay = (seconds) => new Promise((resolve) => {
    setTimeout(() => {
        resolve('The long delay has ended');
    }, seconds * 1000);
});

// Multiple return
delay(1)
    .then(console.log)
    .then(() => getRandomArbitrary(1, 9))
    .then(num => console.log(`Random: ${num}`));
