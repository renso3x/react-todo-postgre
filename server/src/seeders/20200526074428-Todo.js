'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'todo',
      [
        {
          title: 'Read Emails',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Give Feedback To Kylo',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Lunch meeting with CEO',
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {},
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todo', null, {});
  }
};
