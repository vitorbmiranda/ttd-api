const config = require('config');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const logger = require('./api/utils/logger');

const LevelsRouter = require('./api/routers/levels_router');
const TutorialsRouter = require('./api/routers/tutorials_router');
const CheckpointsRouter = require('./api/routers/checkpoints_router');

const app = express();
app.use(express.json());
app.use(cors(config.get('cors')));
app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());

app.use(LevelsRouter);
app.use(TutorialsRouter);
app.use(CheckpointsRouter);

/* eslint-disable no-unused-vars */
app.use((req, res, next) => {
  res.status(404);
  if (req.accepts('json')) {
    res.send({ error: { code: 'NOT_FOUND', message: 'Not found, mate :(' } });
    return;
  }
  res.type('txt').send('Not found, mate :(');
});

app.listen(config.get('port'), () => {
  logger.info(`Started on port: ${config.get('port')}`);
});
