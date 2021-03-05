const util = require('util');

// Inspect module object
util.inspect(module);

// Display the fisrt level of the object
util.inspect(global, { depth: 0 });

// Format message
util.format('String: %s', 'something');
