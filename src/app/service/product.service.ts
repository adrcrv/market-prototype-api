import ProductRepository from '../repository/product.repository';
import { Product } from '../interface/product';

export default class ProductService {
  private productRepository: ProductRepository;

  public constructor() {
    this.productRepository = new ProductRepository();
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

  public updateById(id: number | string, product: Product): Promise<Product | null> {
    return this.productRepository.updateById(id, product);
  }

  public deleteById(id: number | string): Promise<number | null> {
    return this.productRepository.deleteById(id);
  }
}
