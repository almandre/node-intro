const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
    const cpus = os.cpus().length;

    console.log(`Forking for ${cpus} CPUs`);
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    console.log(`Master PID: ${process.pid}`);

    // eslint-disable-next-line no-unused-vars
    cluster.on('exit', (worker, code, signal) => {
        if (code !== !worker.exitedAfterDisconnect) {
            console.log(`Worker ${worker.id} crashed. `
                        + 'Starting a new worker...');
            cluster.fork();
        }
    });

    process.on('SIGUSR2', () => {
        const workers = Object.values(cluster.workers);

        const restartWorker = index => {
            const worker = workers[index];
            if (!worker) return;

            worker.on('exit', () => {
                if (!worker.exitedAfterDisconnect) return;

                console.log(`Exited process ${worker.process.pid}`);
                cluster.fork().on('listening', () => {
                    restartWorker(index + 1);
                });
            });

            worker.disconnect();
        };

        restartWorker(0);
    });
} else {
    // eslint-disable-next-line global-require
    require('./server');
}
