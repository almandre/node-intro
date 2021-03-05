const url = require('url');

const obj = {
    protocol: 'https',
    host: 'www.localhost:8080',
    pathname: '/default.html',
    query: {
        year: 2021,
        month: 'february',
    },
};

// Result is https://www.localhost:8080/default.html?year=2021&month=february
console.log(url.format(obj));
