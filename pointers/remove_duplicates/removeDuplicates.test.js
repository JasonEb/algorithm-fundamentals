const removeDuplicates = require('./removeDuplicates')

test('example case 1', () => {
    let nums = [1,1,2]
  
    expect(removeDuplicates(nums)).toBe(2)
    expect(nums).toEqual([1,2]);
  });