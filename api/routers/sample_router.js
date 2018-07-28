/**
 * Express Router
 */
const SampleRouter = require('express').Router();

/**
 * Controllers
 */
const SampleController = require('../controllers/sample_controller');

SampleRouter.route('/').get(SampleController.test);

module.exports = SampleRouter;
