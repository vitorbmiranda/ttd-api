const path = require('path');
const config = require('config');
const Sequelize = require('sequelize');

let databaseInstance = null;

const loadModels = (sequelize) => {
  const models = {};
  models.Tutorial = sequelize.import(path.join(__dirname, './models/tutorial.js'));
  models.Checkpoint = sequelize.import(path.join(__dirname, './models/checkpoint.js'));
  models.Checkpoint.belongsTo(models.Tutorial);
  return models;
};

const initSequelize = () => {
  const {
    user,
    password,
    db,
    host,
    port,
    dialect,
  } = config.get('postgres');

  if (!databaseInstance) {
    const sequelize = new Sequelize(db, user, password, {
      host,
      port,
      dialect,
      define: {
        freezeTableName: true,
        underscored: true,
      },
    });

    databaseInstance = {
      sequelize,
      Sequelize,
      models: {},
    };

    databaseInstance.models = loadModels(sequelize);
    sequelize.sync().done(() => databaseInstance);
  }
  return databaseInstance;
};

module.exports = initSequelize();
