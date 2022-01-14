import fs from 'fs/promises';
import { constants } from 'fs';
import sqlite3 from 'sqlite3'
import SqliteError from '../errors/sqlite.error';
import IStorable from '../models/istorable';

class SqliteService {
    private static _path = './generated/storage.db';
    private static _db?: sqlite3.Database;
    private static _isOpen: boolean = false;

    static async open() {
        try {
            const isInstalled = await this._exists();

            this._db = new sqlite3.Database(this._path);

            if(!isInstalled) {
                await this._install();
            }
            
            this._isOpen = true;
        } catch(e) {
            throw new SqliteError(`Could not open database. Message: ${e}`);
        }
    }

    static async all<T extends IStorable>(query: string): Promise<T[]> {
        const self = this;

        return new Promise<T[]>(function(resolve) {
            if(!self._db)
                throw new SqliteError('Could not query; database not instantiated');
            
            self._db.all(query, (err, rows) => {
                if(err)
                    throw new SqliteError(`Could not query: ${err}`);

                resolve(rows as T[]);
            });
        });
    }

    static async single<T extends IStorable>(query: string, [...params]): Promise<T> {
        const self = this;

        return new Promise<T>(function(resolve) {
            if(!self._db)
                throw new SqliteError('Could not query; database not instantiated.');
            
            self._db.get(query, params, (err, row) => {
                if(err)
                    throw new SqliteError(`Could not query: ${err}`);
                
                resolve(row as T);
            });
        });
    }

    static execute(query: string) {
        if(!this._db)
            throw new SqliteError('Could not query; database not instantiated.');

        this._db.run(query);
    }

    static close() {
        if(this._db && this._isOpen) {
            this._db.close();
            this._isOpen = false;
        }
    }

    private static async _exists(): Promise<boolean> {
        try {
            await fs.access(this._path, constants.R_OK);
        } catch {
            return false;
        }

        return true;
    }

    private static async _install() {
        if(!this._db)
            throw new SqliteError('Could not install; database not instantiated.');

        const contents = await fs.readFile('./src/schema/01-install.sql', 'utf8');

        // finds "-- end" in sql file, splits the string so we can run multiple
        // statements
        const statements = contents.split('-- end');
        
        for(let statement of statements) {
            this._db.exec(statement);
        }
    }
}

export default SqliteService;