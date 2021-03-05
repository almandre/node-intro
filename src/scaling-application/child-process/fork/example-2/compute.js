function longComputation() {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += 1;
    }

    return sum;
}

process.on('message', msg => {
    console.log(msg);

    const sum = longComputation();

    console.log(sum);
    process.send(sum);
});
