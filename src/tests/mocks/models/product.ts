import { Product } from '../../../database/entities/product';
import { productMock1, productMock2 } from '../entities/product';

export default {
  findAll: jest.fn(async (): Promise<Product[]> => {
    return [productMock1, productMock2];
  }),
  findOne: jest.fn(async (query: any): Promise<Product | null> => {
    const { id } = query.where;
    return id === productMock1.id ? productMock1 : null;
  }),
  create: jest.fn(async (query): Promise<Product> => {
    return query;
  }),
  update: jest.fn(async (query, options): Promise<(number | any[])[]> => {
    const { id } = options.where;
    return id === productMock2.id ? [1, [query]] : [0, []];
  }),
  destroy: jest.fn(async (query): Promise<number | null> => {
    const { id } = query.where;
    return id === productMock2.id ? 1 : null;
  }),
};
