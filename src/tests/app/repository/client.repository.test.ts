import ClientRepository from '../../../app/repository/client.repository';
import { Client } from '../../../database/entities/client';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

describe('Client Repository Tests', (): void => {
  test('Expect findAll to equal array of clients', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const data: Client[] = await clientRepository.findAll();
    expect(data).toEqual([clientMock1, clientMock2]);
  });
});
