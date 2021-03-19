const {search} = require('./search')

test('example 1',() => {
    let nums = [-1,0,3,5,9,12], target = 9

    expect(search(nums, target)).toEqual(4)
})