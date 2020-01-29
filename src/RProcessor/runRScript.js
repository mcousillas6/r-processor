const { spawn } = require('child_process');

const runRScript = (path, ...args) => new Promise((resolve, reject) => {
  const RCall = ['--no-restore', '--no-save', path, ...args];
  const child = spawn('Rscript', RCall, { ...process.env });

  let errorEmitted = false;

  child.on('error', (error) => {
    errorEmitted = true;
    reject(error);
  });

  child.on('exit', () => {
    if (errorEmitted) return; // debounce - already rejected
    resolve();
  });
});

module.exports = runRScript;
