import { clientMock1, clientMock2 } from '../entities/client';
import { Client } from '../../../database/entities/client';

const db: any = {
  Client: {
    findAll: jest.fn(async (): Promise<Client[]> => [clientMock1, clientMock2]),
    findOne: jest.fn(async (query: any): Promise<Client | null> => {
      const { id } = query.where;
      return id === clientMock1.id ? clientMock1 : null;
    }),
    create: jest.fn(async (query): Promise<Client> => query),
  },
};

export default db;
