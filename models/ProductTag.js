const { Model, DataTypes } = require('sequelize');
const { Product, Tag } = require('.');
const sequelize = require('../config/connection');


class ProductTag extends Model {}

ProductTag.init(
  {
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Product.belongsToMany(ProductTag);

module.exports = ProductTag;
