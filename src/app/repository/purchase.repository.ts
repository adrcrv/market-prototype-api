import { db } from '../../database/config/db-connection';
import { Purchase } from '../interface/purchase';

export default class PurchaseRepository {
  private purchase: any;
  private product: any;
  private client: any;
  private productRelation: object;
  private clientRelation: object;

  public constructor() {
    this.purchase = db.Purchase;
    this.product = db.Product;
    this.client = db.Client;
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

  public create(purchase: Purchase): Purchase {
    return this.purchase.create(purchase);
  }

  public async updateById(id: number, purchase: Purchase): Promise<Purchase | null> {
    const response = await this.purchase.update(purchase, { where: { id }, returning: true });
    const [rows, data] = response;
    return rows ? data[0] : null;
  }

  public async deleteById(id: number): Promise<number | null> {
    const rows = await this.purchase.destroy({ where: { id } });
    return rows || null;
  }
}
