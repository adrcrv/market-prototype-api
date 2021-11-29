import ClientController from '../../../app/controller/client.controller';
import HTTP_STATUS from '../../../app/constant/http-status.constant';
import { clientMock1, clientMock2 } from '../../mocks/data/client';

const { default: express } = jest.requireMock('../../mocks/express/express');

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ClientController findAll', (): void => {
  test('Expect findAll to be called with && equal array of clients', async (): Promise<void> => {
    const { req, res } = express;
    await ClientController.findAll(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith([clientMock1, clientMock2]);
  });
});

describe('ClientController findById', (): void => {
  test('Expect findById to be called with && equal of client', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: clientMock1.id };
    await ClientController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(clientMock1);
  });

  test('Expect findById to be called with && equal of client', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: 9999 }; // Nonexistent ID
    await ClientController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('ClientController create', (): void => {
  test('Expect create to be called with equal array of clients', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    await ClientController.create(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(clientMock2);
  });
});

describe('ClientController update by id', (): void => {
  test('Expect update to be called with && equal client', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    req.params.id = clientMock2.id;
    await ClientController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(clientMock2);
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await ClientController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('ClientController delete by id', (): void => {
  test('Expect delete to be called with', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    req.params.id = clientMock2.id;
    await ClientController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith();
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = clientMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await ClientController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});
