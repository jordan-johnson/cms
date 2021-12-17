import fs from 'fs';
import { IObject } from '../abstract/iobject';
import { IStorageManager } from './istorage-manager';

class JsonStorage implements IStorageManager {
  private storageDirectory: string = 'storage';

  exists(obj: IObject): boolean {
    return fs.existsSync(`${this.storageDirectory}/${obj.id}.json`);
  }

  async post(obj: IObject): Promise<void> {
    const stringify = JSON.stringify(obj);

    fs.writeFile(`${this.storageDirectory}/${obj.id}.json`, stringify, (e) => {
      if (e) throw e;
    });
  }

  async delete(obj: IObject): Promise<void> {
    fs.unlink(`${this.storageDirectory}/${obj.id}.json`, (e) => {
      if (e) throw e;
    });
  }
}

export default JsonStorage;
