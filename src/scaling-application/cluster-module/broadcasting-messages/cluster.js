const cluster = require('cluster');
const os = require('os');

// Mock DB Call
const numberOfUsersInDB = () => {
    this.count = this.count || 5;

    this.count *= this.count;

    return this.count;
};

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    const updateWorkers = () => {
        const usersCount = numberOfUsersInDB();

        Object.values(cluster.workers).forEach(worker => {
            worker.send({ usersCount });
        });
    };

    updateWorkers();

    setInterval(updateWorkers, 10000);
} else {
    // eslint-disable-next-line global-require
    require('./server');
}
