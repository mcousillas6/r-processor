const logger = require('../utils/Logger');
const runRScript = require('../RProcessor/runRScript');

module.exports = async ({ data: { fileLocation, uploadId } }) => {
  logger.info('Running script with options:', fileLocation, uploadId);

  const env = {
    FILE_LOCATION: fileLocation,
    UPLOAD_ID: uploadId,
  };

  try {
    await runRScript('background_process.r', env);
    logger.info('Script finished with options: ', fileLocation, uploadId);
  } catch (error) {
    logger.error('Script failed with error: ', error);
  }
};
