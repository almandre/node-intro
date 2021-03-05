// Arguments of the wrapping function
// function (exports, require, module, __filename, __dirname) {}
console.log(arguments);

// This is ok
exports.id = 1;

// This is not ok
exports = { id: 1 };

// This is ok
module.exports = { id: 1 };

// Local to this file
const num = 42;
