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

function twoSumRec(numbers, target, l = 0, r = numbers.length - 1) {
  if (r < l) {
    return [l, r];
  }

  let sum = numbers[l] + numbers[r];

  if (sum == target) {
    return [l + 1, r + 1];
  } else if (sum > target) {
    twoSumRec(numbers, target, l, --r);
  } else {
    twoSumRec(numbers, target, ++l, r);
  }

  return twoSumRec(numbers, target, l, r);
}

module.exports = twoSum;