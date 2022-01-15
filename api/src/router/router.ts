import express, { Request, Response, NextFunction } from 'express';
import IController from '../controllers/icontroller';
import ObjectController from '../controllers/object.controller';

export type ExpressRouterDef = (req: Request, res: Response, next?: NextFunction) => void;

class CMSRouter {
    private _express: express.Application;
    private _controllers: IController[];

    constructor(expressDependency: express.Application) {
        this._express = expressDependency;

        this._controllers = [
            new ObjectController()
        ];
    }

    mount() {
        for(const controller of this._controllers) {
            controller.registerRoutes();

            this._express.use(`/${controller.name}`, controller.router);
        }
    }
}

export default CMSRouter;