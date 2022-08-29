'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
   let users =[];

   for(let i = 1; i <=5; i++) {
    users.push({
      id:i,
      name:`usuario${i}`,
      lastname:`usuario${i}`,
      email:`usuario${i}@mail.com`,
      password:bcrypt.hashSync("123456", 10),
      createdAt:new Date().toISOString(),
      updatedAt:new Date().toISOString()
  
    })
    
   }

    await queryInterface.bulkInsert('users',users, {});
    
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});

  }
};
