import fs from 'fs';
import { IObject } from "../abstract/iobject";
import { IStorageManager } from "./istorage-manager";

export class JsonStorage implements IStorageManager {
    private _dir: string = 'storage';
    
    exists(obj: IObject): boolean {
        const itExists = fs.existsSync(`${this._dir}/${obj.id}.json`);
        console.log(`yo does it exist ${itExists}`);
        return itExists;
    }

    async post(obj: IObject): Promise<void> {
        let stringify = JSON.stringify(obj);

        fs.writeFile(`${this._dir}/${obj.id}.json`, stringify, e => {
            if(e) throw e;
        });
    }

    async delete(obj: IObject): Promise<void> {
        fs.unlink(`${this._dir}/${obj.id}.json`, (e) => {
            if(e) throw e;
        });
    }
}