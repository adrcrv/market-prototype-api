import { Request, Response } from 'express';
import PurchaseService from '../service/purchase.service';
import HTTP_STATUS from '../constant/http-status.constant';
import { Purchase, PurchaseCreation } from '../interface/purchase';

export default class PurchaseController {
  public static async findAll(req: Request, res: Response): Promise<void> {
    const purchaseService: PurchaseService = new PurchaseService();
    const payload: Purchase[] = await purchaseService.findAll();
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const purchaseService: PurchaseService = new PurchaseService();
    const payload: Purchase = await purchaseService.findById(+id);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const { body }: { body: PurchaseCreation } = req;
    const purchaseService: PurchaseService = new PurchaseService();
    const payload: Purchase = await purchaseService.create(body);
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async updateById(req: Request, res: Response): Promise<void> {
    const { body, params } = req;
    const { id } = params;
    const purchaseService: PurchaseService = new PurchaseService();
    const payload: Purchase | null = await purchaseService.updateById(+id, body);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }

  public static async deleteById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const purchaseService: PurchaseService = new PurchaseService();
    const payload: number | null = await purchaseService.deleteById(+id);
    if (payload) res.status(HTTP_STATUS.OK).json();
    else res.status(HTTP_STATUS.No_Content).json();
  }
}
