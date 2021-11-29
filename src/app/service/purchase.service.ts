import { Purchase } from '../../database/entities/purchase';
import PurchaseRepository from '../repository/purchase.repository';

export default class PurchaseService {
  private purchaseRepository: PurchaseRepository;

  public constructor() {
    this.purchaseRepository = new PurchaseRepository();
  }

  public findAll(): Purchase[] {
    return this.purchaseRepository.findAll();
  }

  public findById(id: number): Purchase {
    return this.purchaseRepository.findById(id);
  }

  public create(purchase: Purchase): Promise<Purchase> {
    return this.purchaseRepository.create(purchase);
  }

  public updateById(id: number | string, purchase: Purchase): Promise<Purchase | null> {
    return this.purchaseRepository.updateById(id, purchase);
  }

  public deleteById(id: number | string): Promise<number | null> {
    return this.purchaseRepository.deleteById(id);
  }
}
