// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

function moveZeroes(nums: number[]): void {
  let leftCounter = 0;
  for (let rightCounter = 0; rightCounter < nums.length; rightCounter++) {
    if (nums[rightCounter] !== 0) {
      [nums[leftCounter], nums[rightCounter]] = [
        nums[rightCounter],
        nums[leftCounter],
      ];
      leftCounter++;
    }
  }
  return;
}
