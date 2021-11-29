import { Sequelize, DataTypes, Model } from 'sequelize';
import { Client } from '../../app/interface/client';

export default (sequelize: Sequelize) => {
  interface ClientInstance extends Client, Model {}

  const ClientSchema: any = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    legalId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const ClientOptions: object = { tableName: 'client' };

  const ClientModel: any = sequelize.define<ClientInstance>('Client', ClientSchema, ClientOptions);

  ClientModel.associate = (models) => {
    ClientModel.hasMany(models.Purchase, { foreignKey: 'clientId', as: 'client' });
  };

  return ClientModel;
};
