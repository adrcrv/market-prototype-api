import { DataTypes, Model, Sequelize } from 'sequelize';
import { Product } from '../../app/interface/product';

export default (sequelize: Sequelize) => {
  interface ProductInstance extends Product, Model {}

  const ProductSchema: any = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  };

  const ProductOptions: object = { tableName: 'product' };

  const ProductModel: any = sequelize.define<ProductInstance>('Product', ProductSchema, ProductOptions);

  return ProductModel;
};
