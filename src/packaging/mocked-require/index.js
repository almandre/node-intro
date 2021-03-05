// Mocked require
require = () => ({ mocked: true });

const fs = require('fs');
console.log(fs);
