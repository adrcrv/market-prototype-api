import { Request, Response } from 'express';
import ClientService from '../service/client.service';

export default class ClientController {
  public clientService: ClientService;

  constructor() {
    this.clientService = new ClientService();
  }

  public async findAllClients(req: Request, res: Response): Promise<void> {
    const payload = await this.clientService.findAll();
    res.json(payload);
  }
}
