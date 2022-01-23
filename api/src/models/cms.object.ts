import IStorable from './istorable';

class CMSObject implements IStorable {
    id?: number;

    name?: string;

    checksum?: string;

    created?: Date;
    
    updated?: Date;
}

export default CMSObject;