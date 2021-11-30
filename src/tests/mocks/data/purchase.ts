import { clientMock1, clientMock2 } from './client';
import { productMock1, productMock2 } from './product';
import { Purchase, PurchaseCreation } from '../../../app/interface/purchase';

export const purchaseMock1: Purchase = {
  id: 1,
  note: 'Hurry Up!',
  paymentMethod: 'Cash',
  clientId: clientMock1.id,
  client: clientMock1,
  product: [productMock1],
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};

export const purchaseMock2: Purchase = {
  id: 2,
  note: null,
  clientId: clientMock2.id,
  client: clientMock2,
  product: [productMock2],
  paymentMethod: 'Credit Card',
  createdAt: new Date('2021-11-28T03:00:49.096Z'),
  updatedAt: new Date('2021-11-28T03:00:49.096Z'),
};

export const purchaseMock3: PurchaseCreation = {
  note: null,
  clientId: clientMock2.id,
  product: { id: 2, quantity: 1 },
  paymentMethod: 'Credit Card',
};
