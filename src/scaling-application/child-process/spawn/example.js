const { spawn } = require('child_process');

const child = spawn('cmd.exe', ['/c', 'cd']);

// process.stdin.pipe(child.stdin);

child.stdout.on('data', data => {
    console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', data => {
    console.log(`child stderr:\n${data}`);
});

child.on('exit', (code, signal) => {
    console.log(`child process exited with code ${code}, signal ${signal}`);
});

// Other events on child: disconnect, error, message, close
// stdio objects: child.stdin, child.stdout, child.stderr
