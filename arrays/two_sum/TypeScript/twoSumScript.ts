class V1 {
  static twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
      let x = nums[i]
      for(let j = i + 1; j < nums.length; j++) {
        let y = nums[j]
        if (x + y === target) {
          return [i, j]
        }
      }
    }

    return [];
  }
}

// V1.twoSum([2, 7, 11, 15], 9)

class V2 {
  static twoSum(nums: number[], target: number): number[] {
    const map: { [key: number]: number } = {};

    for (let idx = 0; idx < nums.length; idx++) {
      const x = nums[idx];
      const compliment = target - x;

      if(compliment in map) {
        return [map[compliment], idx]
      }

      map[x] = idx; 
    }

    return [];
  }
}

console.log(V2.twoSum([2, 7, 11, 15], 9));


// ---- driver code — no jest, just plain TS, run with: npx ts-node twoSumScript.ts ----

function check(nums: number[], target: number): void {
  let result: number[] | string;

  try {
    result = twoSum(nums, target);
  } catch (e) {
    result = `threw: ${(e as Error).message}`;
  }

  console.log(`nums=${JSON.stringify(nums)}, target=${target} -> ${JSON.stringify(result)}`);
}

// check([2, 7, 11, 15], 9);
// check([3, 2, 4], 6);
// check([3, 3], 6);
// check([-3, 4, 3, 90], 0);
