const intersect = require('./intersect')

test('passes example from article', () => {
    let a = [1,2,4,5]
    let b = [2,3,5,7,9,11]
  
    expect(intersect(a,b)).toEqual([2,5]);
});

test('passes example 1', () => {
    let a = [1,2,2,1]
    let b = [2,2]

    expect(intersect(a,b)).toEqual([2,2]);
});

test('passes example 2', () => {
    let a = [4,9,5]
    let b = [9,4,9,8,4]
  
    expect(intersect(a,b)).toEqual([4,9]);
});
