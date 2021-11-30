import { db } from '../../database/config/db-connection';
import { PurchaseProduct, PurchaseProductOptional } from '../interface/purchase-product';
import { PurchaseCreation } from '../interface/purchase';

export default class PurchaseProductRepository {
  private purchaseProduct: any;

  public constructor() {
    this.purchaseProduct = db.PurchaseProduct;
  }

  public create(purchaseProduct: PurchaseProduct): PurchaseCreation {
    return this.purchaseProduct.create(purchaseProduct);
  }

  public async deleteById(query: PurchaseProductOptional): Promise<number | null> {
    const rows = await this.purchaseProduct.destroy({ where: query });
    return rows || null;
  }
}
