const {merge} = require('./merge')

test('it passes example 1', () => {
    let nums1 = [1,2,3,0,0,0]
    let m = 3
    let nums2 = [2,5,6]
    let n = 3
    let answer = [1,2,2,3,5,6]

    expect(merge(nums1, m, nums2, n)).toEqual(answer)
})

test('it passes example 2', () => {
    let nums1 = [1]
    let m = 1
    let nums2 = []
    let n = 0
    let answer = [1]

    expect(merge(nums1, m, nums2, n)).toEqual(answer)
})

test('it passes example 3', () => {
    let nums1 = [1, 0]
    let m = 1
    let nums2 = [2]
    let n = 0
    let answer = [1,2]

    expect(merge(nums1, m, nums2, n)).toEqual(answer)
})

test('it passes example 4', () => {
    let nums1 = [0]
    let m = 0
    let nums2 = [1]
    let n = 0
    let answer = [1]

    expect(merge(nums1, m, nums2, n)).toEqual(answer)
})