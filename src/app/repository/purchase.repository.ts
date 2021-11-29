import { db } from '../../database/config/db-connection';
import { Purchase } from '../interface/purchase';
import { PurchaseCreation } from '../interface/purchase-creation';

export default class PurchaseRepository {
  private purchase: any;
  private product: any;
  private client: any;
  private purchaseProduct: any;
  private productRelation: object;
  private clientRelation: object;

  public constructor() {
    this.purchase = db.Purchase;
    this.product = db.Product;
    this.client = db.Client;
    this.purchaseProduct = db.PurchaseProduct;
    this.productRelation = { model: this.product, as: 'product', through: { attributes: ['quantity'], as: 'purchaseProduct' } };
    this.clientRelation = { model: this.client, as: 'client' };
  }

  public findAll(): Purchase[] {
    const include: object[] = [this.productRelation, this.clientRelation];
    return this.purchase.findAll({ include });
  }

  public findById(id: number): Purchase {
    const include: object[] = [this.productRelation, this.clientRelation];
    return this.purchase.findOne({ where: { id }, include });
  }

  public async create(purchase: PurchaseCreation): Promise<Purchase> {
    const { product, ...newPurchase }: PurchaseCreation = purchase;
    const { id: productId, quantity: productQuantity } = product;
    const newPurchaseData: Purchase = await this.purchase.create(newPurchase);
    const { id: purchaseId }: { id: number } = newPurchaseData;
    await this.purchaseProduct.create({ purchaseId, productId, quantity: productQuantity });
    return this.findById(purchaseId);
  }

  public async updateById(id: number | string, purchase: Purchase): Promise<Purchase | null> {
    const response = await this.purchase.update(purchase, { where: { id }, returning: true });
    const [rows, data] = response;
    return rows ? data[0] : null;
  }

  public async deleteById(id: number | string): Promise<number | null> {
    const rows = await this.purchase.destroy({ where: { id } });
    return rows || null;
  }
}
