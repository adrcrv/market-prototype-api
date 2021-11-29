import ClientRepository from '../../../app/repository/client.repository';
import { Client } from '../../../database/entities/client';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';
import { db } from '../../../database/config/db-connection';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: dbMock } = jest.requireMock('../../mocks/db-connection/db-connection');
  return { db: dbMock };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ClientRepository FindAll', (): void => {
  test('Expect findAll to equal array of clients', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const data: Client[] = await clientRepository.findAll();
    expect(db.Client.findAll).toBeCalled();
    expect(data).toEqual([clientMock1, clientMock2]);
  });
});

describe('ClientRepository FindById', (): void => {
  test('Expect findById to equal client', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const inputId: number = clientMock1.id;
    const data: Client = await clientRepository.findById(inputId);
    expect(db.Client.findOne).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(clientMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Client = await clientRepository.findById(inputId);
    expect(db.Client.findOne).toBeCalledWith({ where: { id: inputId } });
    expect(data).toBeNull();
  });
});

describe('ClientRepository create', (): void => {
  test('Expect create to equal a new client', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const data: Client = await clientRepository.create(clientMock2);
    expect(db.Client.create).toBeCalledWith(clientMock2);
    expect(data).toEqual(clientMock2);
  });
});

describe('ClientRepository update by id', (): void => {
  test('Expect update to equal a client', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const inputId: number = clientMock2.id;
    const data: Client | null = await clientRepository.updateById(inputId, clientMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Client.update).toBeCalledWith(clientMock2, expectedUpdateOptions);
    expect(data).toEqual(clientMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const clientRepository: ClientRepository = new ClientRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Client | null = await clientRepository.updateById(inputId, clientMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Client.update).toBeCalledWith(clientMock2, expectedUpdateOptions);
    expect(data).toBeNull();
  });
});
