import IStorable from '../models/istorable';

interface IRepository<T extends IStorable> {
    getAll(): Promise<T[]>;
    find(condition: (item: IStorable) => boolean): T | undefined;
    getById(id: number): Promise<T>;

    insert(item: T): void;
    update(item: T): void;
    delete(item: T): void;
}

export default IRepository;