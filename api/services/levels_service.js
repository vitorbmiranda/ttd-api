const sequelize = require('sequelize');
const db = require('../db/db');

const selectLevels = async game => (
  db.models.Tutorial.findAll({
    attributes: ['level', [sequelize.fn('COUNT', sequelize.col('level')), 'total']],
    group: 'level',
    where: {
      game,
    },
  })
);

module.exports = {
  selectLevels,
};
