import { PurchaseProduct } from '../../../app/interface/purchase-product';
import { purchaseMock1, purchaseMock2 } from './purchase';
import { productMock1, productMock2 } from './product';

export const purchaseProductMock1: PurchaseProduct = {
  id: 1,
  purchaseId: purchaseMock1.id,
  productId: productMock1.id,
  quantity: 1,
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};

export const purchaseProductMock2: PurchaseProduct = {
  id: 1,
  purchaseId: purchaseMock2.id,
  productId: productMock2.id,
  quantity: 2,
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};
