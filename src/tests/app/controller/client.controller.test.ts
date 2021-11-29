import ClientController from '../../../app/controller/client.controller';
import { clientMock1, clientMock2 } from '../../mocks/entities/client';
import { HTTP_STATUS } from '../../../app/constant/http-status.constant';

const { default: express } = jest.requireMock('../../mocks/express/express');

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ClientController findAll', (): void => {
  test('Expect findAll to called with && equal array of clients', async (): Promise<void> => {
    const { req, res } = express;
    await ClientController.findAll(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith([clientMock1, clientMock2]);
  });
});

describe('ClientController findById', (): void => {
  test('Expect findById to called with && equal of client', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: clientMock1.id };
    await ClientController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(clientMock1);
  });

  test('Expect findById to called with && equal of client', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: 9999 }; // Nonexistent ID
    await ClientController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('ClientController create', (): void => {
  test('Expect create to called with equal array of clients', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    await ClientController.create(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(clientMock2);
  });
});
