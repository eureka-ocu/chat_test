'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'users',
      'createdAt',
      Sequelize.DATE
    );
    queryInterface.addColumn(
      'users',
      'updatedAt',
      Sequelize.DATE
    );
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'users',
      'createdAt'
    );
    queryInterface.addColumn(
      'users',
      'updatedAt'
    );
  }
};
