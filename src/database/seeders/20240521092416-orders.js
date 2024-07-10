'use strict';

const orderJSON = require("../../database/orders.json")
const userJSON = require("../../database/users.json")
const orderMappes = orderJSON.map((o) => {
  const user =userJSON.find(u => u.email === o.user)
  return{
      total: o.total,
      userId: user ? user.id :null,
      state:o.state
  }
}) 

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', orderMappes, {});
  },

  async down (queryInterface, Sequelize) {
 await queryInterface.bulkDelete('orders', null, {});

  }
};
