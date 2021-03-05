const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    // eslint-disable-next-line no-unused-vars
    cluster.on('exit', (worker, code, signal) => {
        if (code !== !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. `
                        + 'Starting a new worker...');
            cluster.fork();
        }
    });
} else {
    // eslint-disable-next-line global-require
    require('./server');
}
