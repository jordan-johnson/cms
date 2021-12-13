
import { Text as CMSText } from '../domain/abstract/field_types/text';
import '../domain/abstract/iobject';
import { IObject } from '../domain/abstract/iobject';

describe('Object abstraction', () => {
    let firstNameInput: CMSText = new CMSText('firstName');
    let lastNameInput: CMSText = new CMSText('lastName');
    let stateInput: CMSText = new CMSText('state', {
        defaultValue: 'NY',
        maxLength: 2
    });

    let person: IObject = {
        id: 0,
        name: 'Person',
        fields: [firstNameInput, lastNameInput]
    };

    test('throws exception if value exceeds maximum length', () => {
        expect(stateInput.value).toBe('NY');
        expect(() => stateInput.validate()).not.toThrowError('Value exceeds maximum length');

        // change stateInput value to throw exception
        stateInput.value = 'ABC';
        expect(stateInput.value).toBe('ABC');
        expect(() => stateInput.validate()).toThrowError('Value exceeds maximum length');
    });
})