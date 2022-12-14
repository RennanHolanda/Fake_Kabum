'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('adresses', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      cep_one: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'users' },
          key: 'id'
        },
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('adresses');

  }
};




