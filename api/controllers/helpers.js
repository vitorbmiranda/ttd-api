const httpStatus = require('http-status-codes');
const logger = require('../utils/logger');

const ERROR_MESSAGE = 'An internal error occurred! You might want to check the server logs.';
const ERROR_CODE = 'INTERNAL_SERVER_ERROR';

const errorHandler = (res, code, message, status, ex) => {
  // TODO: enhance the log handler (add stack and sequelize details, ex.fields etc)
  if (ex) logger.error(`Error: ${ex.name} - Stack: ${ex.stack}`);
  return res
    .status(status)
    .send({ error: { code, message } });
};

const internalServerError = (res, ex) => (
  errorHandler(res, ERROR_CODE, ERROR_MESSAGE, httpStatus.INTERNAL_SERVER_ERROR, ex)
);

const successHandler = (res, status, payload) => (
  payload ? res.status(status).send(payload) : res.status(status).end()
);

const ok = (res, payload) => (successHandler(res, httpStatus.OK, payload));
const created = (res, payload) => (successHandler(res, httpStatus.CREATED, payload));

module.exports = {
  internalServerError,
  errorHandler,
  ok,
  created,
};
