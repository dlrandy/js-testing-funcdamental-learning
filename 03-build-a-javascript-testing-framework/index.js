const {sum, subtract} = require('../math');

 test('sum adds numbers', () => {
    let result, expected;
    result = sum(3, 7)
    expected = 10;
    expect(result).toBe(expected);   
 })
 

 test('sum subtract numbers', () => {
    result = subtract(7, 3);
    expected = 4;
    
    expect(result).toBe(expected);  
 })
 


function test(title, callback) {
    try {
        callback();
        console.log(`√ ${title}`);
    } catch (error) {
        console.error(`× ${title}`);
        console.error(error);
    }
}


function expect(actual) {
    return {
        toBe(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        }
    };
}