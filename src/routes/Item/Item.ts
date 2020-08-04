// TODO: Update URL for items later to take in an ID
// TODO: Add in a URL to fetch all items
import express, { Request, Response } from 'express';
import { itemController } from '../../controllers';

export const router = express.Router({
    strict: true
});

router.post('/', (req: Request, res: Response) => {
    itemController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
    itemController.read(req, res);
});

router.patch('/', (req: Request, res: Response) => {
    itemController.update(req, res);
});

router.delete('/', (req: Request, res: Response) => {
    itemController.delete(req, res);
});
