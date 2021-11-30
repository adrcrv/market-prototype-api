import PurchaseController from '../../../app/controller/purchase.controller';
import { purchaseMock1, purchaseMock2, purchaseMock3 } from '../../mocks/data/purchase';
import HTTP_STATUS from '../../../app/constant/http-status.constant';

const { default: express } = jest.requireMock('../../mocks/express/express');

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('PurchaseController findAll', (): void => {
  test('Expect findAll to be called with && equal array of purchases', async (): Promise<void> => {
    const { req, res } = express;
    await PurchaseController.findAll(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith([purchaseMock1, purchaseMock2]);
  });
});

describe('PurchaseController findById', (): void => {
  test('Expect findById to be called with && equal of purchase', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: purchaseMock1.id };
    await PurchaseController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(purchaseMock1);
  });

  test('Expect findById to be called with && equal of purchase', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: 9999 }; // Nonexistent ID
    await PurchaseController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('PurchaseController create', (): void => {
  test('Expect create to be called with equal array of purchases', async (): Promise<void> => {
    const { req, res } = express;
    req.body = purchaseMock3;
    await PurchaseController.create(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(purchaseMock1);
  });
});

describe('PurchaseController update by id', (): void => {
  test('Expect update to be called with && equal purchase', async (): Promise<void> => {
    const { req, res } = express;
    req.body = purchaseMock2;
    req.params.id = purchaseMock2.id;
    await PurchaseController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(purchaseMock2);
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = purchaseMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await PurchaseController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('PurchaseController delete by id', (): void => {
  test('Expect delete to be called with', async (): Promise<void> => {
    const { req, res } = express;
    req.body = purchaseMock2;
    req.params.id = purchaseMock2.id;
    await PurchaseController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith();
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = purchaseMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await PurchaseController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});
