import { Request, Response } from 'express';
import ClientService from '../service/client.service';

export default class ClientController {
  public static async findAll(req: Request, res: Response): Promise<void> {
    const clientService = new ClientService();
    const payload = await clientService.findAll();
    res.json(payload);
  }
}
