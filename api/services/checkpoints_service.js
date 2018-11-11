const db = require('../db/db');

const insertCheckpoint = async (tutorialId, checkpoint) => (
  db.models.Checkpoint.create({ ...{ tutorial_id: tutorialId }, ...checkpoint })
);

const selectCheckpoints = async tutorialId => (
  db.models.Checkpoint.findAll({
    where: {
      tutorial_id: tutorialId,
    },
  })
);

module.exports = {
  insertCheckpoint,
  selectCheckpoints,
};
