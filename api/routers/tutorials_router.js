const TutorialsRouter = require('express').Router();
const { getTutorials, getTutorialById, postTutorial } = require('../controllers/tutorials_controller');

TutorialsRouter.route('/v1/tutorial').get(getTutorials);
TutorialsRouter.route('/v1/tutorial/:id').get(getTutorialById);
TutorialsRouter.route('/v1/tutorial').post(postTutorial);

module.exports = TutorialsRouter;
