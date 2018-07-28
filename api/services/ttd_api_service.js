/**
 * Modules
 */
const HttpStatus = require('http-status-codes');
const express = require('express');
const config = require('config');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

/**
 * Logging
 */
const logger = require('../utils/logger');

/**
 * Routers
 */
const SampleRoute = require('../routers/sample_router');

class APIService {
  constructor() {
    this.application = express();
    this.application.use(helmet());
    this.application.use(express.json());
    this.application.use(morgan(
      'IP=:remote-addr RU=:remote-user METHOD=:method PATH=:url HTTP=:http-version" STATUS=:status RES=:res[content-length] REF=:referrer UA=:user-agent" TIME=:response-time ms', // eslint-disable-line max-len
      { stream: logger.stream },
    ));
    this.application.use(cors(config.get('cors')));
    this.createRouters();

    this.application.use(APIService.errorHandler);
  }

  createRouters() {
    this.application.use(SampleRoute);
  }

  get app() {
    return this.application;
  }

  /* eslint-disable no-unused-vars */
  static errorHandler(error, request, response, next) {
    const status = HttpStatus.INTERNAL_SERVER_ERROR;
    const message = HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR);
    logger.error(`${error.status || 500} - ${error.message} - ${request.originalUrl} - ${request.method} - ${request.ip}`);
    return response.status(status).json({
      status,
      message,
    });
  }

  /* eslint-enable no-unused-vars */
  static async connect() {
    logger.info('Starting');
  }
}

module.exports = APIService;
