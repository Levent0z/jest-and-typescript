import { Main } from '../index';

describe('index', () => {
    it('Responds correctly', () => {
        let main;

        expect(() => { main = new Main(); }).not.toThrow();
        expect(main.hello('world')).toBe('Hello world!');
        expect(main.hello('jest')).toBe(' Hello jest!'); // Left padded
    });
});
