const { fetchLevels } = require('../services/levels_service');
const { isValidGame } = require('../utils/level_utils');

const getLevels = async (request, response) => {
  try {
    const { query: { game } } = request;
    if (!isValidGame(game)) {
      return response.status(400).send({ error: { code: 'INVALID_PARAMETER', message: 'Invalid \'game\' parameter' } });
    }
    const levels = await fetchLevels(game);
    return response.status(200).send(levels);
  } catch (ex) {
    return response.status(500).send({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'An internal error occurred! You might want to check the server logs.' } });
  }
};

module.exports = {
  getLevels,
};
