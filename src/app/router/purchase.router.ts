import { Application } from 'express';
import PurchaseController from '../controller/purchase.controller';

export default class PurchaseRouter {
  public static inject(app: Application): void {
    app.get('/api/purchases', PurchaseController.findAll);
    app.get('/api/purchases/:id', PurchaseController.findById);
    app.post('/api/purchases/', PurchaseController.create);
    app.put('/api/purchases/:id', PurchaseController.updateById);
    app.delete('/api/purchases/:id', PurchaseController.deleteById);
  }
}
