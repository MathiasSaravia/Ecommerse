'use strict';
const paginateSequelize = require('sequelize-paginate')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     product.belongsTo(models.category, {
       foreignKey:"categoryId",
       as:"category"
     })
    product.belongsToMany(models.Order,{
      through:"orderproducts",
      foreignKey:"productId",
      otherKey:"orderId",
      as:"orders"
    }) 
    }
    
  }
  product.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imagePrincipal: DataTypes.STRING,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
  });
  paginateSequelize.paginate(product)
  return product;
};