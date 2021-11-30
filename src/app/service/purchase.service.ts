import PurchaseRepository from '../repository/purchase.repository';
import PurchaseProductRepository from '../repository/purchase-product.repository';
import { Purchase, PurchaseCreation, PurchaseProductCreation } from '../interface/purchase';

export default class PurchaseService {
  private purchaseRepository: PurchaseRepository;
  private purchaseProductRepository: PurchaseProductRepository;

  public constructor() {
    this.purchaseRepository = new PurchaseRepository();
    this.purchaseProductRepository = new PurchaseProductRepository();
  }

  public findAll(): Purchase[] {
    return this.purchaseRepository.findAll();
  }

  public findById(id: number): Purchase {
    return this.purchaseRepository.findById(id);
  }

  public async create(purchaseCreation: PurchaseCreation): Promise<Purchase> {
    const { product, ...purchase }: PurchaseCreation = purchaseCreation;
    const { id: productId, quantity }: PurchaseProductCreation = product;
    const { id: purchaseId }: Purchase = await this.purchaseRepository.create(purchase);
    if (!purchaseId || !productId) throw new Error(); // TODO: Error Handler Implementation
    await this.purchaseProductRepository.create({ purchaseId, productId, quantity });
    return this.findById(purchaseId);
  }

  public updateById(id: number, purchase: Purchase): Promise<Purchase | null> {
    return this.purchaseRepository.updateById(id, purchase);
  }

  public async deleteById(id: number): Promise<number | null> {
    await this.purchaseProductRepository.deleteById({ purchaseId: id });
    return this.purchaseRepository.deleteById(id);
  }
}
