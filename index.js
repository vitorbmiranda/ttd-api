const config = require('config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./api/utils/logger');

const LevelsRouter = require('./api/routers/levels_router');
const TutorialsRouter = require('./api/routers/tutorials_router');

const app = express();
app.use(express.json());
app.use(cors(config.get('cors')));
app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());

app.use(LevelsRouter);
app.use(TutorialsRouter);

app.listen(config.get('port'), () => {
  logger.info(`Started on port: ${config.get('port')}`);
});
