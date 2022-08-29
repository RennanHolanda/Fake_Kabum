'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('requests', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      total_value: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
      },
      purchase_date: {
        type: Sequelize.DataTypes.DATE,
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

    await queryInterface.dropTable('requests');

  }
};
