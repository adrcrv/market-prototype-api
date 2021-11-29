import { Client } from './client';
import { Product } from './product';

export interface Purchase {
  id: number,
  clientId: number;
  product: Product[]
  client: Client,
  paymentMethod: string;
  note?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
