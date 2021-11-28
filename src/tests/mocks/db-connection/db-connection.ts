import { clientMock1, clientMock2 } from '../entities/client';
import { Client } from '../../../database/entities/client';

const db = {
  Client: {
    findAll: jest.fn(async (): Promise<Client[]> => [clientMock1, clientMock2]),
    findOne: jest.fn(async (query: any): Promise<Client> => {
      const { id } = query.where;
      return id === clientMock1.id ? clientMock1 : null;
    }),
  },
};

export default db;
