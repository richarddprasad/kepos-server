import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import { getConnection } from "typeorm";
import { ItemEntity } from "../../entities";

export class ItemController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public async read(req: Request, res: Response): Promise<void> {
    const items = await getConnection().getRepository(ItemEntity).find();

    // console.log('ITEMS FETCHED', items);

    res.json(items);

    // res.status(200).send('ITEMS');
  }

  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}
