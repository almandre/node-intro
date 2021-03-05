/* eslint-disable func-names */
/* eslint-disable prefer-template */
/* eslint-disable prefer-rest-params */
const util = require('util');

module.exports.puts = util.deprecate(function () {
    for (let i = 0, len = arguments.length; i < len; ++i) {
        process.stdout.write(arguments[i] + '\n');
    }
});
