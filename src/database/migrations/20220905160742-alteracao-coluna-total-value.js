'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.changeColumn('requests','total_value', { 
      type:Sequelize.DataTypes.FLOAT,
      allowNull: false
    });
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
