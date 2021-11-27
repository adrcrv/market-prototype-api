import { Sequelize, DataTypes, Model } from 'sequelize';

export default (sequelize: Sequelize) => {
  interface ClientInstance extends Model {
    name: string;
  }

  const ClientSchema: any = {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  };

  const ClientOptions = { tableName: 'client' };

  return sequelize.define<ClientInstance>('Client', ClientSchema, ClientOptions);
};
