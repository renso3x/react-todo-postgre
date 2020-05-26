'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'subtask',
      [
        {
          title: 'Compose email',
          status: 'pending',
          todoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Update pdf',
          status: 'pending',
          todoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Reserve Don-Bori restaurant',
          status: 'pending',
          todoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {},
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('subtask', null, {});
  }
};
