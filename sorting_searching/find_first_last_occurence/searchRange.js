/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }
  //bsearch the target
  //go all the way left to find first occurence
  //go all the right right to find last occurence

  //bsearch the target
  let l = bsearch(nums, target, 0, nums.length - 1);

  //1 length array edgecase
  if (nums.length == 1 && nums[0] == target) {
      l = 0 
  }

  if (l === -1) {
    return [-1, -1];
  }

  //go all the way left to find first occurence
  while (nums[l] === nums[l - 1]) {
    l--;
  }

  //go all the right right to find last occurence
  let r = l;
  while (nums[r] === nums[r + 1]) {
    r++;
  }

  
  return [l, r];
};

 var bsearch = function (nums, target, l, r) {
   if (l > r) {
     return -1;
   }

   let m = Math.floor((l + r) / 2);

   if (nums[m] == target) {
     return m;
   }

   if (nums[m] > target) {
     return bsearch(nums, target, l, m - 1);
   } else {
     return bsearch(nums, target, m + 1, r);
   }
 };

exports.searchRange = searchRange