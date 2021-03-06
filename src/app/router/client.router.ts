import { Application } from 'express';
import ClientController from '../controller/client.controller';

export default class ClientRouter {
  public static inject(app: Application): void {
    app.get('/api/clients', ClientController.findAll);
    app.get('/api/clients/:id', ClientController.findById);
    app.post('/api/clients/', ClientController.create);
    app.put('/api/clients/:id', ClientController.updateById);
    app.delete('/api/clients/:id', ClientController.deleteById);
  }
}
