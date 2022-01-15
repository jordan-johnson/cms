import Path from "path";
import fs from "fs/promises";
import { constants } from "fs";

class FileUtil {
    private static _storageDirectory = 'storage/';

    static async read(path: string): Promise<string> {
        const resolvedPath = this._resolvePath(path);
        const contents = await fs.readFile(resolvedPath, 'utf8');

        return contents;
    }

    static async write(path: string, content: string) {
        try {
            const resolvedPath = this._resolvePath(path);
            await fs.writeFile(resolvedPath, content);
        } catch(e) {
            // update with new error
            console.log(e);
        }
    }

    static async mkdir(path: string) {
        const resolvedPath = this._resolvePath(path);
        
        try {
            await fs.access(resolvedPath, constants.R_OK | constants.W_OK);
            await fs.mkdir(resolvedPath);
        } catch {
            console.log('couldnt read/write');
        }
    }

    private static _resolvePath(path: string): string {
        return Path.resolve(
            __dirname,
            this._storageDirectory,
            path
        );
    }
}

export default FileUtil;