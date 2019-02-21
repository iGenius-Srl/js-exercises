import { mergeArrays } from './';

describe('mergeArrays', () => {
    it('in domain tests', () => {
        const result = mergeArrays([[1, 2], ['ciao', 'mamma'], [3, 4]]);
        const expected = [1, 2, 'ciao', 'mamma', 3, 4];
        expect(result).toEqual(expected);
    });

    it('weird input tests', () => {
        const result = [
            mergeArrays([[null, 2], ['ciao', ''], [false, 4]]),
            mergeArrays(['weird', [1, 4]]),
        ];
        const expected = [[null, 2, 'ciao', '', false, 4], ['w', 'e', 'i', 'r', 'd', 1, 4]];
        expect(result).toEqual(expected);
    });
});
