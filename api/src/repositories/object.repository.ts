import IRepository from "./irepository";
import CMSObject from "../models/cms.object";
import SqliteService from "../services/sqlite";

class ObjectRepository implements IRepository<CMSObject> {
    private _objects: CMSObject[];

    constructor() {
        this._objects = [];
    }

    public async getAll(): Promise<CMSObject[]> {
        const results = await SqliteService.all<CMSObject>('SELECT * FROM `objects`');

        return results;
    }

    find(condition: (item: CMSObject) => boolean): CMSObject | undefined {
        return this._objects.find(condition);
    }

    getById(id: number): CMSObject {
        console.log(id);
        
        return new CMSObject();
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