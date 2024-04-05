/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let lastPosition = m + n - 1;
    let nums1TrackerPosition = m - 1;
    let nums2TrackerPosition = n - 1;

    while(nums2TrackerPosition > -1) {
        if ((nums1[nums1TrackerPosition] > nums2[nums2TrackerPosition]) && (nums1TrackerPosition >= 0)) {
            nums1[lastPosition--] = nums1[nums1TrackerPosition--];
        } else {
            nums1[lastPosition--] = nums2[nums2TrackerPosition--]; 
        }
    }
};