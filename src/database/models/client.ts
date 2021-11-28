import { Sequelize, DataTypes, Model } from 'sequelize';
import { Client } from '../entities/client';

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

  return sequelize.define<ClientInstance>('Client', ClientSchema, ClientOptions);
};
