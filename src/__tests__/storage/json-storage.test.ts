import { JsonStorage } from '../../domain/storage/json-storage';
import { person } from '../common';

const storage = new JsonStorage();

describe('JSON storage', () => {
    test('write file then delete', async () => {
        await expect(storage.post(person))
            .resolves
            .not
            .toThrowError();
        
        expect(storage.exists(person)).toBe(true);

        await expect(storage.delete(person))
            .resolves
            .not
            .toThrowError();

        expect(storage.exists(person)).toBe(false);
    });
});