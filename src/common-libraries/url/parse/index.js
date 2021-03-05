const url = require('url');

const urlStr = 'https://www.localhost:8080/default.html?year=2021&month=february';

const obj = url.parse(urlStr);

const { query } = url.parse(urlStr, true);

// Result is {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.localhost:8080',
//   port: '8080',
//   hostname: 'www.localhost',
//   hash: null,
//   search: '?year=2021&month=february',
//   query: 'year=2021&month=february',
//   pathname: '/default.html',
//   path: '/default.html?year=2021&month=february',
//   href:
//    'https://www.localhost:8080/default.html?year=2021&month=february' }
console.log(obj);

// Result is {"year":"2021","month":"february"}
console.log(JSON.stringify(query));
