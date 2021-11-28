import { clientMock1, clientMock2 } from '../entities/client';
import { Client } from '../../../database/entities/client';

const db = {
  Client: {
    findAll: async (): Promise<Client[]> => [clientMock1, clientMock2],
  },
};

export default db;
