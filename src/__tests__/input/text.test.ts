import { person } from '../common';

describe('Text input validation', () => {
    test('count fields to match expected test', () => {
        expect(person.fields.length).toBe(3);
    });

    test('first name, last name, and state inputs are of "text" type', () => {
        for(let field of person.fields) {
            expect(field.type).toBe('text');
        }
    });

    test('throws exception if text value exceeds maximum length', () => {
        let stateInput = person.fields.find((x) => x.name === 'state');

        if(stateInput === undefined) {
            throw new Error('State input undefined or not found in fields array');
        }
        
        expect(stateInput.value).toBe('NY');
        expect(() => stateInput?.validate()).not.toThrowError('Value exceeds maximum length');

        // change stateInput value to throw exception
        stateInput.value = 'ABC';
        expect(stateInput.value).toBe('ABC');
        expect(() => stateInput?.validate()).toThrowError('Value exceeds maximum length');
    });
})