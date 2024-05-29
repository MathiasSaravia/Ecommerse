'use strict';
const userJSON = require("../../database/users.json")
const userDbMapped = userJSON.map((u) => {
  return{
    name:u.name,
    surname:u.surname,
    email:u.email,
    password:u.password,
    rol:u.rol
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('users',userDbMapped, {});
    
  },

  async down (queryInterface, Sequelize) {
  
      await queryInterface.bulkDelete('users', null, {});
     
  }
};
