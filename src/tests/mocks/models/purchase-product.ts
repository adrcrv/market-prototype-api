import { PurchaseProduct } from '../../../app/interface/purchase-product';

export default {
  create: jest.fn(async (query): Promise<PurchaseProduct> => {
    return query;
  }),
};
