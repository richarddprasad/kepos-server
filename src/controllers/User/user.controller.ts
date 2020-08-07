import { Request, Response } from "express";
import { CrudController } from "../CrudController";
import { UserService } from '../../services';

export class UserController extends CrudController {
  public create(req: Request, res: Response): void {
    // TODO: Implement method
    res.status(201).send('New User');
  }

  public async read(req: Request, res: Response): Promise<void> {
    const users = await UserService.findAll();

    if(users) {
      res.json(users);
    } else {
      res.status(500).send({error: 'Could not fetch users'});
    }
  }

  public update(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }

  public delete(req: Request, res: Response): void {
    throw new Error("Method not implemented.");
  }
}
