const tutorialModel = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('tutorial', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    game: {
      type: DataTypes.ENUM('ge', 'pd'),
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(2),
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    video_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  });
  return Tutorial;
};

module.exports = tutorialModel;
