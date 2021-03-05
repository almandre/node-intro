const slowAdd = (a, b) => {
    setTimeout(() => {
        console.log(a + b);
    }, 5000);
};

slowAdd(3, 3);

slowAdd(4, 4);
