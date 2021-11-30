import ProductRepository from '../../../app/repository/product.repository';
import { db } from '../../../database/config/db-connection';
import { Product } from '../../../app/interface/product';
import { productMock1, productMock2 } from '../../mocks/data/product';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: dbMock } = jest.requireMock('../../mocks/db-connection/db-connection');
  return { db: dbMock };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ProductRepository FindAll', (): void => {
  test('Expect findAll to equal array of products', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const data: Product[] = await productRepository.findAll();
    expect(db.Product.findAll).toBeCalled();
    expect(data).toEqual([productMock1, productMock2]);
  });
});

describe('ProductRepository FindById', (): void => {
  test('Expect findById to equal product', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = productMock1.id;
    const data: Product = await productRepository.findById(inputId);
    expect(db.Product.findOne).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(productMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Product = await productRepository.findById(inputId);
    expect(db.Product.findOne).toBeCalledWith({ where: { id: inputId } });
    expect(data).toBeNull();
  });
});

describe('ProductRepository create', (): void => {
  test('Expect create to equal a new product', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const data: Product = await productRepository.create(productMock2);
    expect(db.Product.create).toBeCalledWith(productMock2);
    expect(data).toEqual(productMock2);
  });
});

describe('ProductRepository update', (): void => {
  test('Expect update to equal a product', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = productMock2.id;
    const data: Product | null = await productRepository.updateById(inputId, productMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Product.update).toBeCalledWith(productMock2, expectedUpdateOptions);
    expect(data).toEqual(productMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Product | null = await productRepository.updateById(inputId, productMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Product.update).toBeCalledWith(productMock2, expectedUpdateOptions);
    expect(data).toBeNull();
  });
});

describe('ProductRepository delete', (): void => {
  test('Expect deleteById to equal a 1', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = productMock2.id;
    const data: number | null = await productRepository.deleteById(inputId);
    expect(db.Product.destroy).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const productRepository: ProductRepository = new ProductRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: number | null = await productRepository.deleteById(inputId);
    expect(db.PurchaseProduct.destroy).toBeCalledWith({ where: { productId: inputId } });
    expect(db.Product.destroy).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(null);
  });
});
