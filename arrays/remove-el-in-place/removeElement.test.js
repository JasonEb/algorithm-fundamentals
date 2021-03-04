const {removeElement} = require('./removeElement')

test('it passes case 1', () => {
    let nums = [3,2,2,3]
    let val = 3

    expect(removeElement(nums)).toEqual(2)
    expect(nums).toEqual([2,2])
})

test('it passes case 2', () => {
    let nums = [0,1,2,2,3,0,4,2]
    let val = 2

    expect(removeElement(nums)).toEqual(5)
    expect(nums).toEqual([0,1,4,0,3])
})