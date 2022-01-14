import express from 'express';
import SqliteService from './services/sqlite';
import CMSRouter from './router/router';

const api = express();
const port = 3001;
const router = new CMSRouter(api);

SqliteService.open();
router.mount();

const server = api.listen(port, () => console.log('listening on port 3001'));

process.on('SIGINT', () => {
    SqliteService.close();
    server.close();
});