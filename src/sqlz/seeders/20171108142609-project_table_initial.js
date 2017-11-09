'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Projects', [{
      name: 'sample project',
      description: 'This is initial project',
      status: 'not completed',
      createdAt : new Date(),
      updatedAt : new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Projects', [{
      name :'sample project'
    }]);
  }
};
