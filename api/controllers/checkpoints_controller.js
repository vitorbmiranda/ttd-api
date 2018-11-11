const { insertCheckpoint, selectCheckpoints } = require('../services/checkpoints_service');

const { internalServerError, created, ok } = require('./helpers');

const postCheckpoint = async (req, res) => {
  try {
    const result = await insertCheckpoint(req.params.id, req.body);
    return created(res, { id: result.id });
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

const getCheckpoints = async (req, res) => {
  try {
    const levels = await selectCheckpoints(req.params.id);
    return ok(res, levels);
  } catch (ex) {
    return internalServerError(res, ex);
  }
};

module.exports = {
  postCheckpoint,
  getCheckpoints,
};
