import { db } from '../../database/config/db-connection';
import { Product } from '../interface/product';

export default class ProductRepository {
  private product: any;
  private purchaseProduct: any;

  public constructor() {
    this.product = db.Product;
    this.purchaseProduct = db.PurchaseProduct;
  }

  public findAll(): Product[] {
    return this.product.findAll();
  }

  public findById(id: number): Product {
    return this.product.findOne({ where: { id } });
  }

  public create(product: Product): Product {
    return this.product.create(product);
  }

  public async updateById(id: number | string, product: Product): Promise<Product | null> {
    const response = await this.product.update(product, { where: { id }, returning: true });
    const [rows, data] = response;
    return rows ? data[0] : null;
  }

  public async deleteById(id: number | string): Promise<number | null> {
    await this.purchaseProduct.destroy({ where: { productId: id } });
    const rows = await this.product.destroy({ where: { id } });
    return rows || null;
  }
}
