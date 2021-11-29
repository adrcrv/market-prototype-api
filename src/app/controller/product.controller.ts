import { Request, Response } from 'express';
import ProductService from '../service/product.service';
import { HTTP_STATUS } from '../constant/http-status.constant';
import { Product } from '../../database/entities/product';

export default class ProductController {
  public static async findAll(req: Request, res: Response): Promise<void> {
    const productService: ProductService = new ProductService();
    const payload: Product[] = await productService.findAll();
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async findById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const productService: ProductService = new ProductService();
    const payload: Product = await productService.findById(+id);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }

  public static async create(req: Request, res: Response): Promise<void> {
    const { body }: { body: Product } = req;
    const productService: ProductService = new ProductService();
    const payload: Product = await productService.create(body);
    res.status(HTTP_STATUS.OK).json(payload);
  }

  public static async updateById(req: Request, res: Response): Promise<void> {
    const { body, params } = req;
    const { id } = params;
    const productService: ProductService = new ProductService();
    const payload: Product | null = await productService.updateById(id, body);
    if (payload) res.status(HTTP_STATUS.OK).json(payload);
    else res.status(HTTP_STATUS.No_Content).json();
  }

  public static async deleteById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const productService: ProductService = new ProductService();
    const payload: number | null = await productService.deleteById(id);
    if (payload) res.status(HTTP_STATUS.OK).json();
    else res.status(HTTP_STATUS.No_Content).json();
  }
}
