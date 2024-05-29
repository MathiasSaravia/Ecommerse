'use strict';
const productJSON = require("../../database/products.json")
const categoryJSON = require("../../database/category.json")
const productDbMapped = productJSON.map((p) => {
  const category = categoryJSON.find(c => c.name === p.category)

  return{
    title:p.name,
    price:p.price,
    discount:p.discount,
    description:p.description,
    imagePrincipal:p.image,
    categoryId: category ? category.id : null
  }
})   

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Products', productDbMapped, {});
  
  },

  async down (queryInterface, Sequelize) {
 
     await queryInterface.bulkDelete('Products', null, {});

  }
};
