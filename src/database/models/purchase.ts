import { DataTypes, Model, Sequelize } from 'sequelize';
import { Purchase } from '../entities/purchase';

export default (sequelize: Sequelize) => {
  interface PurchaseInstance extends Purchase, Model {}

  const PurchaseSchema: any = {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'client', key: 'id' },
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  };

  const PurchaseOptions: object = { tableName: 'purchase' };

  const PurchaseModel: any = sequelize.define<PurchaseInstance>('Purchase', PurchaseSchema, PurchaseOptions);

  PurchaseModel.associate = (models) => {
    PurchaseModel.belongsTo(models.Client, { foreignKey: 'clientId', as: 'client' });
  };

  return PurchaseModel;
};
