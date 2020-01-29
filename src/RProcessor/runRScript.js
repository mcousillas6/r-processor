const { spawn } = require('child_process');
const path = require('path');

const runRScript = (script, ...args) => new Promise((resolve, reject) => {
  const RCall = ['--no-restore', '--no-save', script, ...args];

  const child = spawn('Rscript', RCall, { ...process.env, cwd: path.resolve('src', 'RCore') });

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
