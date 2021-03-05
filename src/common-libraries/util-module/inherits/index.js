/* eslint-disable func-names */
/* eslint-disable no-useless-constructor */
const util = require('util');
const EventEmitter = require('events');

// ***** The old way
function CustomEmitter() {}

util.inherits(CustomEmitter, EventEmitter);

CustomEmitter.prototype.write = function (data) {
    this.emit('data', data);
};

// ***** The new way
class Custom2Emitter extends EventEmitter {
    constructor() {
        super();
    }

    write(data) {
        this.emit('data', data);
    }
}

const stream = new Custom2Emitter();

stream.write('Message');
