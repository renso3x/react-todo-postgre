'use strict';

const Sequelize = require('sequelize');
const env = 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize.authenticate().then(function(err) {
  if (!!err) {
    console.log('Unable to connect to the database:', err);
    console.log('Name: ' + config.database);
    console.log('User: ' + config.username);
    console.log('Password: ' + config.password);
    console.log('Host: ' + config.host);
    console.log('Port: ' + config.port);
  } else {
    console.log('env: ' + env);
    console.log('Host: ' + config.host);
    console.log('Name: ' + config.database);
    console.log('User: ' + config.username);
    console.log('Port: ' + config.port);
    console.log('Connection has been established successfully.');
  }
});

const models = [
  'Todo',
  'SubTask'
];

models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// Relationships
(function(m) {
  m.Todo.hasMany(m.SubTask);
  m.SubTask.belongsTo(m.Todo);
})(module.exports);

module.exports.db = sequelize;
