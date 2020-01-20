const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports = new Sequelize('codegig', 'postgres', '19987333', {
  host: 'localhost',
  dialect: 'postgres'
});
