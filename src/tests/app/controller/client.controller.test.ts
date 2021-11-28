import ClientController from '../../../app/controller/client.controller';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';

const { default: express } = jest.requireMock('../../mocks/express/express');

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

describe('Client Controller Tests', (): void => {
  test('Expect findAll to called with equal array of clients', async (): Promise<void> => {
    const { req, res } = express;
    await ClientController.findAll(req, res);
    expect(res.json).toBeCalledWith([clientMock1, clientMock2]);
  });
});
