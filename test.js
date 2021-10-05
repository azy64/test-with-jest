const calculator = {
    add : (value1, value2) =>{
        return value1+value2;
    },
    subtract: (value1, value2) =>{
        return value1 - value2;
    },
    divide: (value1, value2) =>{
        if( value2 ===0) return 0;
        return value1/value2;
    },
    multiply: (value1, value2) =>{
        return value1 * value2;
    },
}
const capitalize = (value) =>{
    value = [...value];
    value[0]=value[0].toUpperCase();
    value =value.join('');
    return value;
}
const {stringLength, reverseString} = require('./chanllenge');

test("Give the length of a string", ()=>{
    expect(stringLength("à")).toBeLessThanOrEqual(10);
});

test("lance une exception", ()=>{
    expect(() => stringLength("je suis malade")).toThrow();
});

test("Give the length of an empty string", ()=>{
    expect(() =>stringLength('')).toThrow();
});

test("testing the function reverseString ...", ()=>{
    expect(reverseString('azy')).toEqual('yza');
})
describe('test object calculator', ()=>{
    test('testing addition',()=>{
        expect(calculator.add(2,4)).toEqual(6)
    });
    test('testing substracting',()=>{
        expect(calculator.subtract(2,4)).toEqual(-2)
    });
    test('testing dividing',()=>{
        expect(calculator.divide(2,4)).toBeCloseTo(0.5)
    });
    test('testing multiplying',()=>{
        expect(calculator.multiply(2,4)).toEqual(8)
    });
});
test("capitalize return the string in capitalize ", ()=>{
    expect(capitalize('je suis là')).toEqual("Je suis là")
});

