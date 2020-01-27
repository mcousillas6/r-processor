const logger = require('../utils/Logger');
const runRScript = require('../RProcessor/runRScript');

module.exports = async ({ data: { file_path } }) => {
  logger.info('Running script with options:', file_path);
  const env = { ...process.env, FILE_PATH: file_path };
  runRScript('background_process.r', env, (code) => {
    logger.info('Job finished with code:', code);
  });
};
