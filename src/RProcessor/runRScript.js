const { spawnSync } = require('child_process');

const runRScript = (path, env, onExit = () => null) => {
  const opts = {
    env: env || process.env,
  };

  const RCall = ['--no-restore', '--no-save', path];

  const R = spawnSync('Rscript', RCall, opts);

  R.on('exit', (code) => {
    onExit(code);
  });
};

module.exports = runRScript;
