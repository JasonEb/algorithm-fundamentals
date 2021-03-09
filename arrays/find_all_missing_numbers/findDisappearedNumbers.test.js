const {findDisappearedNumbers} = require('./findDisappearedNumbers')

test('example 1', () => {
    let nums = [4,3,2,7,8,2,3,1]

    expect(findDisappearedNumbers(nums)).toEqual([5,6])
})