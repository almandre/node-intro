const slowAdd = (a, b) => {
    for (let i = 0; i < 999999999; i++);

    return a + b;
};

for (let i = 0; i < 3; i++) {
    const result = slowAdd(i, i);
    console.log(result);
}
