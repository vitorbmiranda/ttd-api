const { allGames, allLevels } = require('../../utils/level_utils');

const tutorialModel = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('tutorial', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    game: {
      type: DataTypes.ENUM,
      values: allGames(),
      allowNull: false,
    },
    level: {
      type: DataTypes.ENUM,
      values: allLevels(),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    video_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
  });
  return Tutorial;
};

module.exports = tutorialModel;
