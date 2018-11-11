const CheckpointsRouter = require('express').Router();
const { postCheckpoint, getCheckpoints } = require('../controllers/checkpoints_controller');

CheckpointsRouter.route('/v1/tutorial/:id/checkpoint').get(getCheckpoints);
CheckpointsRouter.route('/v1/tutorial/:id/checkpoint').post(postCheckpoint);

module.exports = CheckpointsRouter;
