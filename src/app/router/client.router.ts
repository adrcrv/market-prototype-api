import ClientController from '../controller/client.controller';

export default function clientRouter(app) {
  const clientController = new ClientController();
  app.get('/api/clients', clientController.findAllClients.bind(clientController));
}
