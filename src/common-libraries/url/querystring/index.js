const querystring = require('querystring');

const obj = {
    year: 2021,
    month: 'february',
};

const query = 'year=2021&month=february';

const formatedQuery = querystring.parse(query);

// Result is year=2021&month=february
console.log(querystring.stringify(obj));

// Result is { year: '2021', month: 'february' }
console.log(JSON.stringify(formatedQuery));
