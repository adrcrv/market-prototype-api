import { PurchaseProduct } from '../../../app/interface/purchase-product';
import { purchaseMock2 } from '../data/purchase';
import { productMock2 } from '../data/product';

export default {
  create: jest.fn(async (query): Promise<PurchaseProduct> => {
    return query;
  }),
  destroy: jest.fn(async (query): Promise<number | null> => {
    const { purchaseId, productId } = query.where;
    const purchaseIdMatches = purchaseId === purchaseMock2.id;
    const productIdMatches = productId === productMock2.id;
    const hasDeletion = purchaseIdMatches || productIdMatches;
    return hasDeletion ? 1 : null;
  }),
};
