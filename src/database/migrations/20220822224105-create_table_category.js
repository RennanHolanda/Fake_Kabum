'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('category', { 
   id: {
    type: Sequelize.DataTypes.INTEGER(10),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
   },
   category: {
    type: Sequelize.DataTypes.STRING(200),
    allowNull: false
   }
  });
    
  },

  async down (queryInterface, Sequelize) {

  await queryInterface.dropTable('category');
    
  }
};
