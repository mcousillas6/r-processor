const logger = require('../utils/Logger');
const runRScript = require('../RProcessor/runRScript');
const pathResolver = require('../RProcessor/pathResolver');

module.exports = async ({ data: { fileLocation, uploadId } }) => {
  logger.info('Running script with options:', fileLocation, uploadId);

  try {
    await runRScript(pathResolver('download_raw_file.r'), '--args', fileLocation, uploadId);
    logger.info('Script finished with options: ', fileLocation, uploadId);
  } catch (error) {
    logger.error('Script failed with error: ', error);
  }
};
