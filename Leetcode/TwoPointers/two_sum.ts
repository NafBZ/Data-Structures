// LeetCode 1 - Two Sum
// Given an array of numbers and a target, return indices of the two numbers that add up to the target.
// Time: O(n) | Space: O(n)

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// --- Test Cases ---
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));        // [1, 2]
console.log(twoSum([3, 3], 6));           // [0, 1]
