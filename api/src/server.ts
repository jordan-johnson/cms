import express from 'express';
import config from '../../config/setup.json';
import SqliteService from './services/sqlite';
import CMSRouter from './router/router';

const api = express();
const {port} = config.api;
const router = new CMSRouter(api);

SqliteService.open();
router.mount();

const server = api.listen(port, () => console.log(`API listening on port ${port}...`));

process.on('SIGINT', () => {
    SqliteService.close();
    server.close();
});