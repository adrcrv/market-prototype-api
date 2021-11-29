import { Request, Response } from 'express';
import ClientService from '../service/client.service';
import { HTTP_STATUS } from '../constant/http-status.constant';
import { Client } from '../../database/entities/client';

export default class ClientController {
  public static async findAll(req: Request, res: Response): Promise<void> {
    const clientService: ClientService = new ClientService();
    const payload: Client[] = await clientService.findAll();
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const clientService: ClientService = new ClientService();
    const payload: Client = await clientService.findById(+id);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const { body }: { body: Client } = req;
    const clientService: ClientService = new ClientService();
    const payload: Client = await clientService.create(body);
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async updateById(req: Request, res: Response): Promise<void> {
    const { body, params } = req;
    const { id } = params;
    const clientService: ClientService = new ClientService();
    const payload: Client = await clientService.updateById(id, body);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }
}
