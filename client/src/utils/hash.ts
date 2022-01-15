import { Md5 } from 'ts-md5/dist/md5';

class HashUtil {
    static hashString(str: string): string {
        return Md5.hashStr(str);
    }
}

export default HashUtil;