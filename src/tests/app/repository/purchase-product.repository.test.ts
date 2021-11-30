import PurchaseProductRepository from '../../../app/repository/purchase-product.repository';
import { db } from '../../../database/config/db-connection';
import { purchaseProductMock2 } from '../../mocks/data/purchaseProduct';
import { purchaseMock2 } from '../../mocks/data/purchase';
import { Purchase } from '../../../app/interface/purchase';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: dbMock } = jest.requireMock('../../mocks/db-connection/db-connection');
  return { db: dbMock };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('PurchaseProductRepository create', (): void => {
  test('Expect create to equal a new purchaseProduct', async (): Promise<void> => {
    const purchaseProductRepository: PurchaseProductRepository = new PurchaseProductRepository();
    const data = await purchaseProductRepository.create(purchaseProductMock2);
    expect(db.PurchaseProduct.create).toBeCalledWith(purchaseProductMock2);
    expect(data).toEqual(purchaseProductMock2);
  });
});

describe('PurchaseProductRepository delete by id', (): void => {
  test('Expect deleteById thought purchaseId to equal a 1', async (): Promise<void> => {
    const purchaseProductRepository: PurchaseProductRepository = new PurchaseProductRepository();
    const { id: purchaseId }: Purchase = purchaseMock2;
    const data: number | null = await purchaseProductRepository.deleteById({ purchaseId });
    expect(db.PurchaseProduct.destroy).toBeCalledWith({ where: { purchaseId } });
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const purchaseProductRepository: PurchaseProductRepository = new PurchaseProductRepository();
    const purchaseId: number = 9999; // Nonexistent ID
    const data: number | null = await purchaseProductRepository.deleteById({ purchaseId });
    expect(db.PurchaseProduct.destroy).toBeCalledWith({ where: { purchaseId } });
    expect(data).toEqual(null);
  });
});
