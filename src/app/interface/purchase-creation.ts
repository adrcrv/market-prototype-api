export interface PurchaseCreation {
  clientId: number;
  product: { id: number, quantity: number }
  paymentMethod: string;
  note?: string | null;
}
