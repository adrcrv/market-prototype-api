import { Application } from 'express';
import ClientController from '../controller/client.controller';

export default class ClientRouter {
  public static inject(app: Application): void {
    app.get('/api/clients', ClientController.findAll);
    app.get('/api/clients/:id', ClientController.findById);
    app.post('/api/clients/', ClientController.create);
  }
}
