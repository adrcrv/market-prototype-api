import { PurchaseProduct } from './purchase-product';

export interface Purchase {
  id: number,
  clientId: number;
  product: PurchaseProduct
  paymentMethod: string;
  note?: string;
  createdAt: Date;
  updatedAt: Date;
}
