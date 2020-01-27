const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('./utils/Logger');
const { rScriptQueue } = require('./jobs');

const app = express();
const port = process.env.PORT || 3000;

const runApp = () => {
  try {
    app.use(cors());
    app.use(bodyParser.json());
    app.post('/api/queue', async (req, res) => {
      await rScriptQueue.add({ file_path: req.body.file_path });
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
