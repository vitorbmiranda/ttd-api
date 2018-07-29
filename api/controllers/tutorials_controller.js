const { fetchTutorials } = require('../services/tutorials/tutorials_service');
const { LEVEL_KEYS } = require('../utils/constants');

const validateLevel = level => (!!level && LEVEL_KEYS.includes(level.toUpperCase()));

const getTurorials = async (request, response) => {
  try {
    const { query: { level } } = request;
    if (!validateLevel(level)) {
      return response.status(400).send({ error: { code: 'INVALID_PARAMETER', message: 'Invalid \'level\' parameter' } });
    }
    const tutorials = await fetchTutorials(level);
    return response.status(200).send(tutorials);
  } catch (ex) {
    return response.status(500).send({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'An internal error occurred! You might want to check the server logs.' } });
  }
};

module.exports = {
  getTurorials,
};
