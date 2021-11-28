import { Client } from '../../../database/entities/client';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';
import ClientService from '../../../app/service/client.service';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

describe('Client Service Tests', (): void => {
  test('Expect findAll to equal array of clients', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const data: Client[] = await clientService.findAll();
    expect(data).toEqual([clientMock1, clientMock2]);
  });
});