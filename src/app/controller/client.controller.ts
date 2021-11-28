import { Request, Response } from 'express';
import ClientService from '../service/client.service';
import { HTTP_STATUS } from '../constant/http-status.constant';

export default class ClientController {
  public static async findAll(req: Request, res: Response): Promise<void> {
    const clientService = new ClientService();
    const payload = await clientService.findAll();
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const clientService = new ClientService();
    const payload = await clientService.findById(id);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }
}
