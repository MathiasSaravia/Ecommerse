'use strict';
const orderJSON = require("../../database/orders.json")
const productJSON = require("../../database/products.json")

const orderProductMapped = orderJSON.map(ord => {

  const productMapped = ord.products.map(productOrd => {

    const productFind = productJSON.find(productDB => {
      return productDB.name === productOrd.name
    })

    return {
    orderId:ord.id,
    productId:productFind ? productFind.id : null ,
    quantity:productOrd.quantity
  }
  });
  return productMapped
}).flat(1);
console.log(orderProductMapped)
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.bulkInsert('OrderProducts', orderProductMapped, {});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('OrderProducts', null, {});
}
};
