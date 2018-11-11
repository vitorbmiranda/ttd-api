const httpStatus = require('http-status-codes');
const { selectLevels } = require('../services/levels_service');
const { isValidGame, allGames } = require('../utils/level_utils');
const { errorHandler, internalServerError, ok } = require('./helpers');

const getLevels = async (req, res) => {
  try {
    const { query: { game } } = req;

    if (!isValidGame(game)) {
      return errorHandler(
        res,
        'INVALID_GAME',
        `Game has to be one of [${allGames()}]`,
        httpStatus.BAD_REQUEST,
      );
    }

    const levels = await selectLevels(game);
    return ok(res, levels);
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

module.exports = {
  getLevels,
};
