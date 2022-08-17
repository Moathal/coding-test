const { stringLength, reverseString, capitalize} = require ('./string');
const { add, subtract, multiply, divide } = require('./calculator')

describe ('string', () => {
    test('string length returned is correct', ()=> {
        expect(stringLength('hi there')).toEqual(8);
    });

    test("return 'length is less then 1'", ()=>{
        expect(stringLength('')).toBe('Length is less than 1')
    });

    test("return 'length is more than 10'", () => {
        expect(stringLength('hello there')).toEqual('Length is more than 10')
    });

    test("return the correct reverse", () => {
        expect(reverseString('hello world')).toEqual('dlrow olleh');
    });

    test("capitalize the string", () => {
        expect(capitalize('hello')).toBe('HELLO')
    })
});

describe ('calculator', ()=>{
    test('add 3 + 4 correctly', () => {
        expect(add(3, 4)).toEqual(7)
    });

    test('subtract 3 - 4 correctly', () => {
        expect(subtract(3, 4)).toEqual(-1)
    });

    test('multiply 3 * 4 correctly', () => {
        expect(multiply(3, 4)).toEqual(12)
    });

    test('divide 8 / 4 correctly', () => {
        expect(divide(8, 4)).toEqual(2)
    });
});