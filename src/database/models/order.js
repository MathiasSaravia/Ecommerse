'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.product,{ 
        through: "orderproducts" , 
        foreignKey: 'orderId', 
        otherKey: 'productId',
        as: "products"
       })
       Order.belongsTo(models.user,{
        foreignKey:"userId",
        as:"user"
       }
       )
    }
  }
  Order.init({
    total:{ 
      type:DataTypes.INTEGER,
      defaultValue:0
    }, 
    userId: DataTypes.INTEGER,
    state: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args:[["completed","pending","canceled"]],
          msg:"Los valores valido de estados son : completed , pending , canceled"
      },
    },
    defaultValue:"pending"
  },
},
   {
    sequelize,
    modelName: 'Order',
  });
  
  return Order;
};