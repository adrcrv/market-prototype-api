import { purchaseMock1, purchaseMock2 } from '../data/purchase';
import { Purchase } from '../../../app/interface/purchase';

export default {
  findAll: jest.fn(async (): Promise<Purchase[]> => {
    return [purchaseMock1, purchaseMock2];
  }),
  findOne: jest.fn(async (query: any): Promise<Purchase | null> => {
    const { id } = query.where;
    return id === purchaseMock1.id ? purchaseMock1 : null;
  }),
  create: jest.fn(async (query): Promise<Purchase> => {
    return { ...purchaseMock1, ...query };
  }),
  update: jest.fn(async (query, options): Promise<(number | any[])[]> => {
    const { id } = options.where;
    return id === purchaseMock2.id ? [1, [query]] : [0, []];
  }),
  destroy: jest.fn(async (query): Promise<number | null> => {
    const { id } = query.where;
    return id === purchaseMock2.id ? 1 : null;
  }),
};
