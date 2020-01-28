const { spawn } = require('child_process');

const runRScript = (path, env) => new Promise((resolve, reject) => {
  const RCall = ['--no-restore', '--no-save', path];
  const child = spawn('Rscript', RCall, { ...env });

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
