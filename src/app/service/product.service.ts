import ProductRepository from '../repository/product.repository';
import { Product } from '../interface/product';
import PurchaseProductRepository from '../repository/purchase-product.repository';

export default class ProductService {
  private productRepository: ProductRepository;
  private purchaseProductRepository: PurchaseProductRepository;

  public constructor() {
    this.productRepository = new ProductRepository();
    this.purchaseProductRepository = new PurchaseProductRepository();
  }

  public findAll(): Product[] {
    return this.productRepository.findAll();
  }

  public findById(id: number): Product {
    return this.productRepository.findById(id);
  }

  public create(product: Product): Product {
    return this.productRepository.create(product);
  }

  public updateById(id: number, product: Product): Promise<Product | null> {
    return this.productRepository.updateById(id, product);
  }

  public async deleteById(id: number): Promise<number | null> {
    await this.purchaseProductRepository.deleteById({ productId: id });
    return this.productRepository.deleteById(id);
  }
}
