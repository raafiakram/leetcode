/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = nums.length - 1;
  let numsSize = k;
  let counter = 0;
  let hasFound = false;
  let midPoint = Math.floor(nums.length / 2);
  while (k > 0) {
    while (nums[k] === val) {
      hasFound = true;
      k--;
      // from backward check iff val exists in num, iff does move k's position to forward <---
    }
    if (k < counter) {
      break;
    }
    if (nums[counter] === val) {
      // move nums[k] value which is not equal to val to counter's position.
      //as order does not matter, it will not have any impact, also moving k to forward
      nums[counter] = nums[k];
      nums[k--] = val;
      hasFound = true;
    }
    counter++;
    if ((counter >= k && nums[counter] === val) || counter > numsSize) {
      break;
    }
  }

  //   console.log(counter, midPoint);
  if (nums[0] === undefined) {
    counter = 0;
  } else if (counter <= midPoint && nums[midPoint] !== val) {
    counter++;
  } else if (hasFound === false && nums[0] !== val) {
    counter = nums.length;
  }

  return counter;
};

console.log(removeElement([4, 5], 4)); // 1
console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)); // 5
console.log(removeElement([], 0)); // 0
console.log(removeElement([2], 3)); // 1
console.log(removeElement([3, 3], 5)); // 2
console.log(removeElement([2, 4, 4, 4, 0], 4)); // 2
