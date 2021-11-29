import ProductService from '../../../app/service/product.service';
import { productMock1, productMock2 } from '../../mocks/data/product';
import { Product } from '../../../app/interface/product';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('ProductService findAll', (): void => {
  test('Expect findAll to equal array of products', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const data: Product[] = await productService.findAll();
    expect(data).toEqual([productMock1, productMock2]);
  });
});

describe('ProductService findById', (): void => {
  test('Expect findById to equal product', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId: number = productMock1.id;
    const data: Product = await productService.findById(inputId);
    expect(data).toEqual(productMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Product = await productService.findById(inputId);
    expect(data).toBeNull();
  });
});

describe('ProductService create', (): void => {
  test('Expect create to equal a new product', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const data: Product = await productService.create(productMock2);
    expect(data).toEqual(productMock2);
  });
});

describe('ProductService update', (): void => {
  test('Expect update to equal product', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId = productMock2.id;
    const data: Product | null = await productService.updateById(inputId, productMock2);
    expect(data).toEqual(productMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Product | null = await productService.updateById(inputId, productMock2);
    expect(data).toBeNull();
  });
});

describe('ProductService delete', (): void => {
  test('Expect deleteById to equal 1', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId = productMock2.id;
    const data: number | null = await productService.deleteById(inputId);
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const productService: ProductService = new ProductService();
    const inputId: number = 9999; // Nonexistent ID
    const data: number | null = await productService.deleteById(inputId);
    expect(data).toBeNull();
  });
});
