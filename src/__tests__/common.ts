import { IObject } from "../domain/abstract/iobject";
import { Text as CMSText } from '../domain/abstract/field_types/text';

const firstNameInput: CMSText = new CMSText('firstName');
const lastNameInput: CMSText = new CMSText('lastName');
const stateInput: CMSText = new CMSText('state', {
    defaultValue: 'NY',
    maxLength: 2
});

export const person: IObject = {
    id: 0,
    name: 'Person',
    fields: [firstNameInput, lastNameInput, stateInput]
}

test('Common object and inputs', () => {
    if(person === undefined) {
        throw new Error('Person object undefined');
    }
});