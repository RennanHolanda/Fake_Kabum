'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.changeColumn('products',"title", { 
      type: Sequelize.DataTypes.STRING(250),
      allowNull: false
        });

        await queryInterface.changeColumn('products',"value", { 
          type: Sequelize.DataTypes.FLOAT(10,2),
          allowNull: false
            });
     
  },

  async down (queryInterface, Sequelize) {
    
  }
};
