import {
    translateNumber,
    isVowel,
    printArray,
    printReverse,
    Person,
    getTop,
    getSecondTop,
    getPow,
    getPortion,
    getSum,
    getEven,
    getDone,
    howManyCanIBuy,
} from '.';

describe('translateNumber', () => {
    it('in domain tests', () => {
        const result = [
            translateNumber(0),
            translateNumber(1),
            translateNumber(2),
            translateNumber(3),
            translateNumber(4),
            translateNumber(5),
        ];
        const expected = ['zero', 'one', 'two', 'three', 'four', 'five'];
        expect(result).toEqual(expected);
    });

    it('out of domain tests', () => {
        const result = [
            translateNumber(6),
            translateNumber(10),
            translateNumber(-1),
            translateNumber(-2),
        ];
        const expected = Array(4).fill('invalid');
        expect(result).toEqual(expected);
    });

    it('weird input tests', () => {
        const result = [
            translateNumber(null),
            translateNumber(undefined),
            translateNumber('ciao'),
            translateNumber({ a: 'a' }),
        ];
        const expected = Array(4).fill('invalid');
        expect(result).toEqual(expected);
    });
});

describe('isVowel', () => {
    it('in domain tests', () => {
        const result = [isVowel('a'), isVowel('e'), isVowel('i'), isVowel('o'), isVowel('u')];
        const expected = Array(5).fill(true);
        expect(result).toEqual(expected);
    });

    it('out of domain tests', () => {
        const result = [isVowel('c'), isVowel('z'), isVowel('y')];
        const expected = Array(3).fill(false);
        expect(result).toEqual(expected);
    });

    it('weird input tests', () => {
        const result = [isVowel(1), isVowel(null), isVowel({})];
        const expected = Array(3).fill(false);
        expect(result).toEqual(expected);
    });
});

describe('printArray', () => {
    it('in domain tests', () => {
        const result = [printArray(['a']), printArray(['a', 'wow', 1, 2, 3, 123, '123'])];
        const expected = ['a', 'a wow 1 2 3 123 123'];
        expect(result).toEqual(expected);
    });

    it('weird input tests', () => {
        const result = [printArray(['a b', 'c']), printArray(['a', null, true])];
        const expected = ['a b c', 'a null true'];
        expect(result).toEqual(expected);
    });
});

describe('printReverse', () => {
    it('in domain tests', () => {
        const result = [printReverse(['a']), printReverse(['a', 'wow', 1, 2, 3, 123, '123'])];
        const expected = ['a', '123 123 3 2 1 wow a'];
        expect(result).toEqual(expected);
    });

    it('weird input tests', () => {
        const result = [printReverse(['a b', 'c']), printReverse(['a', null, true])];
        const expected = ['c a b', 'true null a'];
        expect(result).toEqual(expected);
    });
});

describe('Person', () => {
    it('Person constructor works', () => {
        const person = new Person('Mattia', 'Rossi');
        expect(person.name).toEqual('Mattia');
        expect(person.surname).toEqual('Rossi');
    });
    it('Person.toString works as expected', () => {
        const person = new Person('Mattia', 'Rossi');
        expect(person.toString()).toEqual('Mattia Rossi');
        expect('wow: ' + person).toEqual('wow: Mattia Rossi');
    });
});

describe('getTop', () => {
    it('getTop works as expected', () => {
        const result = [
            getTop([1, 2, 3, 4, 5, 6]),
            getTop([1, 1, 3000, 4, 5, 6]),
            getTop([1, 2, 3, 6, 5, 6]),
            getTop([1, -2, 3, -4, 5, 6]),
        ];
        const expected = [6, 3000, 6, 6];
        expect(result).toEqual(expected);
    });
});

describe('getSecondTop', () => {
    it('getSecondTop works as expected', () => {
        const result = [
            getSecondTop([1, 2, 3, 4, 5, 6]),
            getSecondTop([1, 1, 3000, 4, 5, 6]),
            getSecondTop([1, 2, 3, 6, 5, 6]),
        ];
        const expected = [5, 6, 5];
        expect(result).toEqual(expected);
    });
});

describe('getPow', () => {
    it('getPow works as expected', () => {
        const result = [getPow([1, 2, 3, 4, 5, 6]), getPow([10000, 1, 10, 4, 6, 5])];
        const expected = [[1, 2, 9, 64, 625, 7776], [1, 1, 100, 64, 1296, 3125]];
        expect(result).toEqual(expected);
    });
});

describe('getPortion', () => {
    it('getPortion works as expected', () => {
        const result = [
            getPortion([1, 2, 3, 4, 5, 6], 0, 5),
            getPortion([10000, 1, 10, 4, 6, 5], 1, 3),
            getPortion([8, 1, 10, 4, 6, 5], 4, 4),
        ];
        const expected = [[1, 2, 3, 4, 5, 6], [1, 10, 4], [6]];
        expect(result).toEqual(expected);
    });
});

describe('getSum', () => {
    it('getSum works as expected', () => {
        const result = [
            getSum([1, 2, 3, 4, 5, 6]),
            getSum([10000, 1, 10, 4, 6, 5]),
            getSum([8, 1, 10, 4, 6, 5]),
        ];
        const expected = [21, 10026, 34];
        expect(result).toEqual(expected);
    });
});

describe('getEven', () => {
    it('getEven works as expected', () => {
        const result = [
            getEven([1, 2, 3, 4, 5, 6]),
            getEven([10000, 1, 10, 4, 6, 5]),
            getEven([8, 1, 10, 4, 6, 5]),
        ];
        const expected = [[2, 4, 6], [10000, 10, 4, 6], [8, 10, 4, 6]];
        expect(result).toEqual(expected);
    });
});

describe('getDone', () => {
    it('getDone works as expected', () => {
        const result = getDone([
            {
                task: 'solve ex1',
                done: true,
            },
            {
                task: 'solve ex2',
                done: true,
            },
            {
                task: 'solve ex3',
                done: true,
            },
            {
                task: 'solve ex7',
                done: false,
            },
        ]);
        const expected = [
            {
                task: 'solve ex1',
                done: true,
            },
            {
                task: 'solve ex2',
                done: true,
            },
            {
                task: 'solve ex3',
                done: true,
            },
        ];
        expect(result).toEqual(expected);
    });
});

describe('howManyCanIBuy', () => {
    it('howManyCanIBuy works as expected', () => {
        const wishlist = [
            {
                description: 'toy',
                price: 20,
            },
            {
                task: 'food',
                price: 10,
            },
            {
                task: 'drugs',
                price: 100,
            },
            {
                task: 'child',
                price: 70,
            },
            {
                task: 'whatever',
                price: 37,
            },
        ];
        const result = [howManyCanIBuy(130, wishlist), howManyCanIBuy(200, wishlist)];
        const expected = [
            {
                numberOfItems: 3,
                totalPrice: 67,
            },
            {
                numberOfItems: 4,
                totalPrice: 137,
            },
        ];
        expect(result).toEqual(expected);
    });
});
