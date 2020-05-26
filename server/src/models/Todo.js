'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('todo', {
    title: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('pending', 'completed'),
    }
  }, {
    freezeTableName: true,
  });
};