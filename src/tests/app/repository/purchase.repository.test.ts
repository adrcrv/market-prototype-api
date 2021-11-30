import PurchaseRepository from '../../../app/repository/purchase.repository';
import { db } from '../../../database/config/db-connection';
import { Purchase } from '../../../app/interface/purchase';
import { purchaseMock1, purchaseMock2, purchaseMock3 } from '../../mocks/data/purchase';
import { PurchaseCreation } from '../../../app/interface/purchase-creation';
import { PurchaseProduct } from '../../../app/interface/purchase-product';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: dbMock } = jest.requireMock('../../mocks/db-connection/db-connection');
  return { db: dbMock };
});

const findProductRelation = { model: db.Product, as: 'product', through: { attributes: ['quantity'], as: 'purchaseProduct' } };
const findClientRelation = { model: db.Client, as: 'client' };

beforeEach(() => {
  jest.clearAllMocks();
});

describe('PurchaseRepository FindAll', (): void => {
  test('Expect findAll to equal array of purchases', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const include: object[] = [findProductRelation, findClientRelation];
    const data: Purchase[] = await purchaseRepository.findAll();
    expect(db.Purchase.findAll).toBeCalledWith({ include });
    expect(data).toEqual([purchaseMock1, purchaseMock2]);
  });
});

describe('PurchaseRepository FindById', (): void => {
  const include: object[] = [findProductRelation, findClientRelation];

  test('Expect findById to equal purchase', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = purchaseMock1.id;
    const data: Purchase = await purchaseRepository.findById(inputId);
    expect(db.Purchase.findOne).toBeCalledWith({ where: { id: inputId }, include });
    expect(data).toEqual(purchaseMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Purchase = await purchaseRepository.findById(inputId);
    expect(db.Purchase.findOne).toBeCalledWith({ where: { id: inputId }, include });
    expect(data).toBeNull();
  });
});

describe('PurchaseRepository create', (): void => {
  test('Expect create to equal a new purchase', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const { product, ...newPurchase }: PurchaseCreation = purchaseMock3;
    const { id: productId, quantity: productQuantity } = product;
    const data: Purchase = await purchaseRepository.create(purchaseMock3);
    const { id: purchaseId }: { id: number } = data;
    const ppArgs: PurchaseProduct = { purchaseId, productId, quantity: productQuantity };

    expect(db.Purchase.create).toBeCalledWith(newPurchase);
    expect(db.PurchaseProduct.create).toBeCalledWith(ppArgs);
    expect(db.Purchase.findOne).toBeCalled();
    expect(data).toEqual({ ...purchaseMock1 });
  });
});

describe('PurchaseRepository update by id', (): void => {
  test('Expect update to equal a purchase', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = purchaseMock2.id;
    const data: Purchase | null = await purchaseRepository.updateById(inputId, purchaseMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Purchase.update).toBeCalledWith(purchaseMock2, expectedUpdateOptions);
    expect(data).toEqual(purchaseMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: Purchase | null = await purchaseRepository.updateById(inputId, purchaseMock2);
    const expectedUpdateOptions = { where: { id: inputId }, returning: true };
    expect(db.Purchase.update).toBeCalledWith(purchaseMock2, expectedUpdateOptions);
    expect(data).toBeNull();
  });
});

describe('PurchaseRepository delete by id', (): void => {
  test('Expect deleteById to equal a 1', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = purchaseMock2.id;
    const data: number | null = await purchaseRepository.deleteById(inputId);
    expect(db.Purchase.destroy).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const purchaseRepository: PurchaseRepository = new PurchaseRepository();
    const inputId: number = 9999; // Nonexistent ID
    const data: number | null = await purchaseRepository.deleteById(inputId);
    expect(db.Purchase.destroy).toBeCalledWith({ where: { id: inputId } });
    expect(data).toEqual(null);
  });
});
