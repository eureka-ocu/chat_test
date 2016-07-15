'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
        'users',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING
          }
        })
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('user')
  }
};
