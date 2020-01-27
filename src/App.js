const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./utils/Logger');
const runRScript = require('./RProcessor/runRScript');

const app = express();
const port = process.env.PORT || 3000;

const runApp = () => {
  try {
    app.use(cors());
    app.use(bodyParser.json());
    app.post('/api/queue', (req, res) => {
      const env = { ...process.env, FILE_PATH: req.body.file_path };
      runRScript('background_process.r', env, (code) => {
        logger.info('Job finished with code:', code);
      });
      res.send({ status: 'Enqueued' });
    });
    app.listen(port, () => {
      logger.info(`Server started on port ${port}`);
    });
  } catch (error) {
    logger.error('Server failed to start', error);
  }
};

module.exports = runApp;
