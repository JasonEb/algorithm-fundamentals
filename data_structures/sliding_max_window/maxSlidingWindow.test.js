const maxSlidingWindow = require('./maxSlidingWindow')

test('setup', () => {
    let nums = [1,3,-1,-3,5,3,6,7]
    let k = 3
    let output = [3,3,5,5,6,7]
    expect(maxSlidingWindow(nums, k)).toBeEqual(output);
});