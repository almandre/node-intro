const logUpdate = require('log-update');

const toX = () => 'X';

class PromiseQueue {
    constructor(promises = [], concurrent = 1) {
        this.concurrent = concurrent;
        this.todo = promises;
        this.running = [];
        this.complete = [];
    }

    hasNext() {
        return (this.running.length < this.concurrent) && this.todo.length;
    }

    graph() {
        const { todo, running, complete } = this;

        logUpdate(`
            todo: [${todo.map(toX)}]
            running: [${running.map(toX)}]
            complete: [${complete.map(toX)}]
        `);
    }

    run() {
        while (this.hasNext()) {
            const promise = this.todo.shift();

            promise.then(() => {
                this.complete.push(this.running.shift());
                this.graph();
                this.run();
            });

            this.running.push(promise);
            this.graph();
        }
    }
}

module.exports = PromiseQueue;
