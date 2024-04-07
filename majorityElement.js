/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  nums.sort();
  console.log(nums);
  let maxAppearCount = 1;
  let appear = 1;
  let maxAppearElement = nums[0];

  for (let i = 1; i < nums.length; i++) {
    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i++;
      appear++;
    }
    if (appear > maxAppearCount) {
      maxAppearCount = appear;
      maxAppearElement = nums[i - 1];
    }
    appear = 0;
  }
  return maxAppearElement;
};

console.log(majorityElement([3, 2, 3]));
