/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let limit = 2;
  let currentCount = limit;
  let prev = nums[0];
  let j = 0;
  for (let val of nums) {
    if (val === prev && currentCount > 0) {
      currentCount--;
      nums[j++] = val;
    } else if (val !== prev) {
      currentCount = limit - 1;
      nums[j++] = val;
    }
    prev = val;
    console.log(nums);
    console.log(currentCount);
  }

  return j;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // 5
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7
