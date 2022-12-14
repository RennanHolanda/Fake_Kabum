'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },

      lastname: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },

      email: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        unique: true
      },

      password: {
        type: Sequelize.DataTypes.STRING(256),
        allowNull: false,
      },

      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE

    });


  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
