export interface PurchaseProductOptional {
  id?: number,
  purchaseId?: number;
  productId?: number;
  quantity?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PurchaseProduct {
  id?: number,
  purchaseId: number;
  productId: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
