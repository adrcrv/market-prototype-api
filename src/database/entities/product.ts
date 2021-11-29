import { PurchaseProduct } from './purchase-product';

export interface Product {
  id: number,
  name: string;
  color: string;
  size: string;
  price: number;
  purchaseProduct: PurchaseProduct
  createdAt: Date;
  updatedAt: Date;
}
