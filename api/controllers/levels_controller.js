const { fetchLevels } = require('../services/levels/levels_service');
const { GAME_KEYS } = require('../utils/constants');

const validateGame = game => (game && GAME_KEYS.includes(game.toUpperCase()));

const getLevels = async (request, response) => {
  try {
    const { query: { game } } = request;
    if (!validateGame(game)) {
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
