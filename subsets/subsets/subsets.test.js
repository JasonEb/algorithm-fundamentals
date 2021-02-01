const { subsets, findCombinations } = require("./subsets");

test("it passes case 2 ", () => {
  let nums = [1, 2];
  let output = [[], [1], [1, 2], [2]]

  let result = subsets(nums);

  expect(result).toEqual(output);
});

test("it passes case 1 ", () => {
  let nums = [1, 2, 3];
  let output = [[], [1], [1,2], [1,2,3], [1,3], [2], [2, 3], [3]]

  let result = subsets(nums);

  expect(result).toEqual(output);
});


