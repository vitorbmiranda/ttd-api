const winston = require('winston');


function formatMessage(args) {
  return `${new Date().toISOString()} ${args.message}`;
}

const options = {
  console: {
    formatter: formatMessage,
    level: 'silly',
    handleExceptions: true,
    colorize: true,
    json: false,
    silent: (['test'].includes(process.env.NODE_ENV)),
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
  ],
  exitOnError: false,
});

logger.stream = {
  write(message) {
    logger.info(message);
  },
};

module.exports = logger;
