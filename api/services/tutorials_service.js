const db = require('../db/db');

const selectTutorials = async level => (
  db.models.Tutorial.findAll({
    where: {
      level,
    },
  })
);

const selectTutorialById = async id => (
  db.models.Tutorial.findByPk(id)
);

const insertTutorial = async tutorial => (db.models.Tutorial.create(tutorial));

module.exports = {
  selectTutorials,
  selectTutorialById,
  insertTutorial,
};
