const Queue = require('bull');

const rScriptQueue = new Queue('rScriptQueue', process.env.REDIS_URL);

rScriptQueue.process(`${__dirname}/runScriptJob.js`);

module.exports = { rScriptQueue };
