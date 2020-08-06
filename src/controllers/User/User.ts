import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import { getConnection } from "typeorm";
import { UserEntity } from "../../entities";

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public async read(req: Request, res: Response): Promise<void> {
    const users = await getConnection().getRepository(UserEntity).find();

    // console.log('USERS FETCHED', users);

    res.json(users);

    // res.send('USERS');
  }

  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}
