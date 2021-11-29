import { DataTypes, Model, Sequelize } from 'sequelize';
import { PurchaseProduct } from '../../app/interface/purchase-product';

export default (sequelize: Sequelize) => {
  interface PurchaseProductInstance extends PurchaseProduct, Model {}

  const PurchaseProductSchema: any = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    purchaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'purchase', key: 'id' },
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'product', key: 'id' },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  };

  const PurchaseProductOptions: object = { tableName: 'purchase_product' };

  const PurchaseProductModel: any = sequelize.define<PurchaseProductInstance>('PurchaseProduct', PurchaseProductSchema, PurchaseProductOptions);

  PurchaseProductModel.associate = (models) => {
    models.Purchase.belongsToMany(models.Product, { through: 'PurchaseProduct', as: 'product' });
    models.Product.belongsToMany(models.Purchase, { through: 'PurchaseProduct', as: 'purchase' });
  };

  return PurchaseProductModel;
};
