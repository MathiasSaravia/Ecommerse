'use strict';
const categoryJSON = require("../../database/category.json")
const categoryDbMapped = categoryJSON.map((c) => {
  return{
    name:c.name
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('Categories', categoryDbMapped, {});
  
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Categories', null, {});
    
  }
};
