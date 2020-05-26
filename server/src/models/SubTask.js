'use strict';
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subtask', {
    title: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM('pending', 'completed'),
    },
    todoId: DataTypes.INTEGER
  }, {
    freezeTableName: true,
  });
};