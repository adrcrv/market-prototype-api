import ProductController from '../../../app/controller/product.controller';
import { productMock1, productMock2 } from '../../mocks/data/product';
import HTTP_STATUS from '../../../app/constant/http-status.constant';

const { default: express } = jest.requireMock('../../mocks/express/express');

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ProductController findAll', (): void => {
  test('Expect findAll to be called with && equal array of products', async (): Promise<void> => {
    const { req, res } = express;
    await ProductController.findAll(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith([productMock1, productMock2]);
  });
});

describe('ProductController findById', (): void => {
  test('Expect findById to be called with && equal of product', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: productMock1.id };
    await ProductController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(productMock1);
  });

  test('Expect findById to be called with && equal of product', async (): Promise<void> => {
    const { req, res } = express;
    req.params = { id: 9999 }; // Nonexistent ID
    await ProductController.findById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('ProductController create', (): void => {
  test('Expect create to be called with equal array of products', async (): Promise<void> => {
    const { req, res } = express;
    req.body = productMock2;
    await ProductController.create(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(productMock2);
  });
});

describe('ProductController update by id', (): void => {
  test('Expect update to be called with && equal product', async (): Promise<void> => {
    const { req, res } = express;
    req.body = productMock2;
    req.params.id = productMock2.id;
    await ProductController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith(productMock2);
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = productMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await ProductController.updateById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});

describe('ProductController delete by id', (): void => {
  test('Expect delete to be called with', async (): Promise<void> => {
    const { req, res } = express;
    req.body = productMock2;
    req.params.id = productMock2.id;
    await ProductController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.OK);
    expect(res.status().json).toBeCalledWith();
  });

  test('Expect update to be called with && to be null', async (): Promise<void> => {
    const { req, res } = express;
    req.body = productMock2;
    req.params = { id: 9999 }; // Nonexistent ID
    await ProductController.deleteById(req, res);
    expect(res.status).toBeCalledWith(HTTP_STATUS.No_Content);
    expect(res.status().json).toBeCalledWith();
  });
});
