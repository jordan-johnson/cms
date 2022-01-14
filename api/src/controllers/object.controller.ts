import { Request, Response, Router } from 'express';
import { ExpressRouterDef } from '../router/router';
import IController from './icontroller';
import ObjectRepository from '../repositories/object.repository';

class ObjectController implements IController {
    name: string;
    router: Router;

    private _repo: ObjectRepository;

    constructor() {
        this._repo = new ObjectRepository();
        
        this.name = 'objects';
        this.router = Router();
    }

    registerRoutes() {
        this.router.get('/', this.get(this._repo));
    }

    private get(repository: ObjectRepository): ExpressRouterDef {
        return async function(_req: Request, res: Response) {
            try {
                const results = await repository.getAll();

                res.status(200).json(results);
            } catch(e) {
                res.status(500).send(
                    `Something went wrong fetching from database. Returned: ${e}`
                );
            }
        }
    }
}

export default ObjectController;