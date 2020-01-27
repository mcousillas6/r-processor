const logger = require('../utils/Logger');
const runRScript = require('../RProcessor/runRScript');

module.exports = async ({ data: { fileLocation, uploadId } }) => {
  logger.info('Running script with options:', fileLocation, uploadId);

  const env = {
    ...process.env,
    FILE_LOCATION: fileLocation,
    UPLOAD_ID: uploadId,
  };

  runRScript('background_process.r', env, (code) => {
    logger.info('Job finished with code:', code);
  });
};
