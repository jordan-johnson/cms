import { Router } from 'express';

interface IController {
    name: string;
    router: Router;
    registerRoutes(): void;
}

export default IController;