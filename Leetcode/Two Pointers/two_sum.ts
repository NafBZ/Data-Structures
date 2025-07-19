/**
 * LeetCode Problem 167: Two Sum II - Input Array Is Sorted
 * https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 *
 * Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
 * Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
 */

// Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

/**
 *
 * @param numbers  1-indexed array of integers that is already sorted in non-decreasing order
 * @param target    specific target number
 * @returns     indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2
 */

function twoSum(numbers: number[], target: number): number[] {
  let rightCounter = numbers.length - 1;
  let indexNumber: number[] = [];
  for (let leftCounter = 0; leftCounter < numbers.length; ) {
    if (leftCounter === rightCounter) {
      return [];
    }
    let sum = numbers[leftCounter] + numbers[rightCounter];
    if (sum === target) {
      indexNumber.push(leftCounter + 1);
      indexNumber.push(rightCounter + 1);
      return indexNumber;
    } else if (sum > target) {
      rightCounter--;
    } else if (sum < target) {
      leftCounter++;
    }
  }
  return [];
}
