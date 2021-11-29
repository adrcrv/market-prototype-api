import ClientModel from '../models/client';
import ProductModel from '../models/product';

const db: any = {
  Client: ClientModel,
  Product: ProductModel,
};

export default db;
