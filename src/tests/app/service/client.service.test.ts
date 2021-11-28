import { Client } from '../../../database/entities/client';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';
import ClientService from '../../../app/service/client.service';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ClientService findAll', (): void => {
  test('Expect findAll to equal array of clients', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const data: Client[] = await clientService.findAll();
    expect(data).toEqual([clientMock1, clientMock2]);
  });
});

describe('ClientService findById', (): void => {
  test('Expect findById to equal client', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId: number = clientMock1.id;
    const data: Client = await clientService.findById(inputId);
    expect(data).toEqual(clientMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Client = await clientService.findById(inputId);
    expect(data).toBeNull();
  });
});
