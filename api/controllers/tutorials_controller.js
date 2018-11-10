const { selectTutorials, insertTutorial } = require('../services/tutorials_service');
const { isValidLevel } = require('../utils/level_utils');

const getTutorials = async (request, response) => {
  try {
    const { query: { level } } = request;
    if (!isValidLevel(level)) {
      return response.status(400).send({ error: { code: 'INVALID_PARAMETER', message: 'Invalid \'level\' parameter' } });
    }
    const tutorials = await selectTutorials(level);
    return response.status(200).send(tutorials);
  } catch (ex) {
    return response.status(500).send({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'An internal error occurred! You might want to check the server logs.' } });
  }
};

const postTutorial = async (request, response) => {
  try {
    await insertTutorial(request.body);
    return response.status(201).end();
  } catch (ex) {
    return response.status(500).send({ error: { code: 'INTERNAL_SERVER_ERROR', message: 'An internal error occurred! You might want to check the server logs.' } });
  }
};

module.exports = {
  getTutorials,
  postTutorial,
};
