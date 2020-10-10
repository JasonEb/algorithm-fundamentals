function twoSum(numbers, target) {
  let l = 0
  let r = numbers.length - 1
  let sum = 0;

  while (l < r) {
    sum = numbers[l] + numbers[r]
    
    if (sum == target) {
      return [l+1, r+1]
    } else if (sum > target) {
      --r
    } else {
      ++l
    }
  }
    return "error"
}
  module.exports = twoSum;