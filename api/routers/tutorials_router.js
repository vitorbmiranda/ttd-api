const TutorialsRouter = require('express').Router();
const TutorialsController = require('../controllers/tutorials_controller');

TutorialsRouter.route('/v1/tutorial').get(TutorialsController.getTurorials);

module.exports = TutorialsRouter;
