import { clientMock1, clientMock2 } from '../entities/client';
import { Client } from '../../../database/entities/client';

const db: any = {
  Client: {
    findAll: jest.fn(async (): Promise<Client[]> => {
      return [clientMock1, clientMock2];
    }),
    findOne: jest.fn(async (query: any): Promise<Client | null> => {
      const { id } = query.where;
      return id === clientMock1.id ? clientMock1 : null;
    }),
    create: jest.fn(async (query): Promise<Client> => {
      return query;
    }),
    update: jest.fn(async (query, options): Promise<(number | any[])[]> => {
      const { id } = options.where;
      return id === clientMock2.id ? [1, [query]] : [0, []];
    }),
  },
};

export default db;
