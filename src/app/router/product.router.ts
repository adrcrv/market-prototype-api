import { Application } from 'express';
import ProductController from '../controller/product.controller';

export default class ProductRouter {
  public static inject(app: Application): void {
    app.get('/api/products', ProductController.findAll);
    app.get('/api/products/:id', ProductController.findById);
    app.post('/api/products/', ProductController.create);
    app.put('/api/products/:id', ProductController.updateById);
    app.delete('/api/products/:id', ProductController.deleteById);
  }
}
