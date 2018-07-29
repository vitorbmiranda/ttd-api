const config = require('config');
const logger = require('./api/utils/logger');
const ApiService = require('./api/services/ttd_api_service.js');

const apiService = new ApiService();

global.gitCommitHash = require('child_process').execSync('git log -1 --format=%H').toString().trim();
global.gitCommitDate = require('child_process').execSync('git log -1 --format=%cd').toString().trim();
global.gitCommitBranch = require('child_process').execSync('git rev-parse --symbolic-full-name --abbrev-ref HEAD').toString().trim();
global.gitCommitMessage = require('child_process').execSync('git log -1 --format=%B').toString().trim();

ApiService.connect()
  .then(() => apiService.app.listen(config.get('port'), () => {
    logger.info(`Server successfully started on port: ${config.get('port')}`);
  }))
  .catch((error) => {
    logger.info(`Error starting Express App. Reason: ${error.message}`);
    process.exit(1);
  });
