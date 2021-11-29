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

describe('ClientService create', (): void => {
  test('Expect create to equal a new client', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const data: Client = await clientService.create(clientMock2);
    expect(data).toEqual(clientMock2);
  });
});

describe('ClientService update', (): void => {
  test('Expect update to equal client', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId = clientMock2.id;
    const data: Client | null = await clientService.updateById(inputId, clientMock2);
    expect(data).toEqual(clientMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Client | null = await clientService.updateById(inputId, clientMock2);
    expect(data).toBeNull();
  });
});

describe('ClientService delete', (): void => {
  test('Expect deleteById to equal 1', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId = clientMock2.id;
    const data: number | null = await clientService.deleteById(inputId);
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const clientService: ClientService = new ClientService();
    const inputId: number = 9999; // Nonexistent ID
    const data: number | null = await clientService.deleteById(inputId);
    expect(data).toBeNull();
  });
});
