import ClientModel from '../models/client';
import ProductModel from '../models/product';
import PurchaseModel from '../models/purchase';
import PurchaseProductModel from '../models/purchase-product';

const db: any = {
  Client: ClientModel,
  Product: ProductModel,
  Purchase: PurchaseModel,
  PurchaseProduct: PurchaseProductModel,
};

export default db;
