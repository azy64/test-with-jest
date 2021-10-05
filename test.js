const {stringLength, reverseString} = require('./chanllenge');
// coreverseString = require('./chanllenge');

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

