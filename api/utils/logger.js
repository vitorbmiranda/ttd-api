const { createLogger, format, transports } = require('winston');

const { combine, timestamp, printf } = format;

const loggerFormat = printf(info => `${info.timestamp} - [${info.level}] ${info.message}`);

const logger = createLogger({
  level: 'silly',
  format: combine(
    timestamp(),
    loggerFormat,
  ),
  transports: [new transports.Console()],
});

// stream hook for morgan
logger.stream = { write(message) { logger.silly(message); } };

module.exports = logger;
