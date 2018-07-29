const LevelsRouter = require('express').Router();
const LevelsController = require('../controllers/levels_controller');

LevelsRouter.route('/v1/level').get(LevelsController.getLevels);

module.exports = LevelsRouter;
