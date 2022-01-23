import IRepository from './irepository';
import CMSObject from '../models/cms.object';
import SqliteService from '../services/sqlite';

class ObjectRepository implements IRepository<CMSObject> {
    private _objects: CMSObject[];

    constructor() {
        this._objects = [];
    }

    async getAll(): Promise<CMSObject[]> {
        const results = await SqliteService.all<CMSObject>('SELECT * FROM `objects`');

        return results;
    }

    find(condition: (item: CMSObject) => boolean): CMSObject | undefined {
        return this._objects.find(condition);
    }

    async getById(id: number): Promise<CMSObject> {
        const result = await SqliteService.single<CMSObject>('SELECT * FROM `objects` WHERE `id` = ?', [id]);

        return result;
    }

    insert(item: CMSObject) {
        console.log(item);
    }

    update(item: CMSObject) {
        console.log(item);
    }

    delete(item: CMSObject): void {
        console.log(item);
    }
}

export default ObjectRepository;