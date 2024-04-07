/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let j = 1;
  let prev = nums[0];
  for (let val of nums) {
    if (val !== prev) {
      nums[j++] = val;
    }
    prev = val;
  }
  return j;
};
