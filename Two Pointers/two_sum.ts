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
