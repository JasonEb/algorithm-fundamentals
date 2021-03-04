const {removeElement} = require('./removeElement')

test('it passes case 1', () => {
    let nums = [3,2,2,3]
    let val = 3
    
    expect(removeElement(nums, val)).toEqual(2)
    expect(nums.slice(0,2)).toEqual([2,2])

})

test('it passes case 2', () => {
    let nums = [0,1,2,2,3,0,4,2]
    let val = 2

    expect(removeElement(nums, val)).toEqual(5)
    expect(nums.slice(0,5)).toEqual(expect.arrayContaining([0,1,4,0,3]))
})

test('it passes case 3', () => {
    let nums = [2]
    let val = 3

    expect(removeElement(nums, val)).toEqual(1)
    expect(nums.slice(0,1)).toEqual([2])
})