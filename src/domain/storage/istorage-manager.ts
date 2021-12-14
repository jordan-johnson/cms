import { IObject } from "../abstract/iobject";

export interface IStorageManager {
    exists(obj: IObject): boolean;
    post(obj: IObject): Promise<void>;
    delete(obj: IObject): Promise<void>;
}