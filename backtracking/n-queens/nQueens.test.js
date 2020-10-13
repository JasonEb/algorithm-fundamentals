const nQueens = require('./nQueens');

test('passes n = 4', () => {
  let n = 4
  let answer = [
    
    ["..Q.",  // Solution 2
    "Q...",
    "...Q",
    ".Q.."], 

    [".Q..",  // Solution 1
      "...Q",
      "Q...",
      "..Q."]
  ]
  expect(nQueens(n)).toEqual(answer);
});

test('passes n = 5', () => {
  let n = 5

  expect(nQueens(n)).toBeTruthy();
});
