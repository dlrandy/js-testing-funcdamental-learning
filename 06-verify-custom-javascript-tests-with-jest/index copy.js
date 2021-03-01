const {sumAsync, subtractAsync} = require('../math');
require('./setGlobal');
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
 


