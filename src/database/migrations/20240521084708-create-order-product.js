'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"orders"
          },
          key:"id"
        },
        onDelate:"CASCADE",
        onUpdate:"CASCADE"
      },
      productId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:"products"
          },
          key:"id"
        },
        onDelate:"CASCADE",
        onUpdate:"CASCADE"
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('orderProducts');
  }
};