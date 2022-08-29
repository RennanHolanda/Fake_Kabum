'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orders_has_products', {
      request_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'requests' },
          key: 'id'
        },
        allowNull: false
      },
      product_id: {
        type: Sequelize.DataTypes.INTEGER(10),
        references: {
          model: { tableName: 'products' },
          key: 'id'
        },
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('orders_has_products');

  }
};
