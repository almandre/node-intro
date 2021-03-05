const dns = require('dns');

dns.lookup('google.com', (err, address) => {
    console.log(`lookup: ${address}`);
});

dns.resolve4('google.com', (err, address) => {
    console.log(`resolve4: ${address}`);
});

dns.resolveMx('google.com', (err, address) => {
    console.log(`resolveMx: ${JSON.stringify(address)}`);
});
