import { Client } from './client';
import { Product } from './product';

export interface PurchaseProductCreation {
  id: number,
  quantity: number
}

export interface PurchaseCreation {
  clientId: number;
  product: PurchaseProductCreation,
  paymentMethod: string;
  note?: string | null;
}

export interface Purchase {
  id?: number,
  clientId: number;
  product?: Product[]
  client?: Client,
  paymentMethod: string;
  note?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
