const httpStatus = require('http-status-codes');
const { selectTutorials, selectTutorialById, insertTutorial } = require('../services/tutorials_service');
const { isValidLevel, allLevels } = require('../utils/level_utils');
const {
  errorHandler, internalServerError, ok, created,
} = require('./helpers');

const getTutorials = async (req, res) => {
  try {
    const { query: { level } } = req;

    if (!isValidLevel(level)) {
      return errorHandler(
        res,
        'INVALID_LEVEL',
        `Level has to be one of [${allLevels()}]`,
        httpStatus.BAD_REQUEST,
      );
    }

    const tutorials = await selectTutorials(level);
    return ok(res, tutorials);
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

const getTutorialById = async (req, res) => {
  const { params: { id } } = req;
  try {
    const tutorial = await selectTutorialById(id);
    if (!tutorial) {
      return errorHandler(
        res,
        'TUTORIAL_NOT_FOUND',
        `Tutorial with id ${id} was not found`,
        httpStatus.NOT_FOUND,
      );
    }
    return ok(res, tutorial);
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

const postTutorial = async (req, res) => {
  try {
    const result = await insertTutorial(req.body);
    return created(res, { id: result.id });
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

module.exports = {
  getTutorials,
  getTutorialById,
  postTutorial,
};
