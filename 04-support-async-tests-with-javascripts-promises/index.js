const {sumAsync, subtractAsync} = require('../math');

 test('sum adds numbers asynchronously', async () => {
    let result, expected;
    result = await sumAsync(3, 7)
    expected = 10;
    expect(result).toBe(expected);   
 })
 

 test('sum subtract numbers asynchronously', async () => {
    result = await subtractAsync(7, 3);
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