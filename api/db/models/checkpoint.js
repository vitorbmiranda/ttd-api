module.exports = (sequelize, DataTypes) => {
  const Checkpoint = sequelize.define('checkpoint', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  });

  return Checkpoint;
};
