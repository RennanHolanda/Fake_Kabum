'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      description: {
        type: Sequelize.DataTypes.STRING(20),
        allowNull: false
      },
      value: {
        type: Sequelize.DataTypes.DECIMAL,
        allowNull: false
      },
      image: {
        type: Sequelize.DataTypes.STRING(250),
        allowNull: false
      },
      category_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'category' },
          key: 'id'
        },
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');

  }
};
