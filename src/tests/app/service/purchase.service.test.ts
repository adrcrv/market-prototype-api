import PurchaseService from '../../../app/service/purchase.service';
import { purchaseMock1, purchaseMock2, purchaseMock3 } from '../../mocks/data/purchase';
import { Purchase } from '../../../app/interface/purchase';

jest.mock('../../../database/config/db-connection', (): object => {
  const { default: db } = jest.requireActual('../../mocks/db-connection/db-connection');
  return { db };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe('PurchaseService findAll', (): void => {
  test('Expect findAll to equal array of purchases', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const data: Purchase[] = await purchaseService.findAll();
    expect(data).toEqual([purchaseMock1, purchaseMock2]);
  });
});

describe('PurchaseService findById', (): void => {
  test('Expect findById to equal purchase', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number | undefined = purchaseMock1.id;
    if (!inputId) return;
    const data: Purchase = await purchaseService.findById(inputId);
    expect(data).toEqual(purchaseMock1);
  });

  test('Expect findById to be null', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Purchase = await purchaseService.findById(inputId);
    expect(data).toBeNull();
  });
});

describe('PurchaseService create', (): void => {
  test('Expect create to equal a new purchase', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const data: Purchase = await purchaseService.create(purchaseMock3);
    expect(data).toEqual(purchaseMock1);
  });

  test('Expect create to throw an error', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const localPurchaseMock: any = { ...purchaseMock3, product: {} };
    const promise: Promise<Purchase> = purchaseService.create(localPurchaseMock);
    await expect(promise).rejects.toThrow();
  });
});

describe('PurchaseService update', (): void => {
  test('Expect update to equal purchase', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number | undefined = purchaseMock2.id;
    if (!inputId) return;
    const data: Purchase | null = await purchaseService.updateById(inputId, purchaseMock2);
    expect(data).toEqual(purchaseMock2);
  });

  test('Expect update to be null', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number = 9999; // Nonexistent ID
    const data: Purchase | null = await purchaseService.updateById(inputId, purchaseMock2);
    expect(data).toBeNull();
  });
});

describe('PurchaseService delete', (): void => {
  test('Expect deleteById to equal 1', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number | undefined = purchaseMock2.id;
    if (!inputId) return;
    const data: number | null = await purchaseService.deleteById(inputId);
    expect(data).toEqual(1);
  });

  test('Expect deleteById to be null', async (): Promise<void> => {
    const purchaseService: PurchaseService = new PurchaseService();
    const inputId: number = 9999; // Nonexistent ID
    const data: number | null = await purchaseService.deleteById(inputId);
    expect(data).toBeNull();
  });
});
