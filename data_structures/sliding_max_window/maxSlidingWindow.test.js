const maxSlidingWindow = require('./maxSlidingWindow')

<<<<<<< HEAD
test('setup', () => {
=======
test('passes case 1', () => {
>>>>>>> 5a2ca3816c11cf87c6a8d202924b667b0005ac93
    let nums = [1,3,-1,-3,5,3,6,7]
    let k = 3
    let output = [3,3,5,5,6,7]
    expect(maxSlidingWindow(nums, k)).toEqual(output);
});