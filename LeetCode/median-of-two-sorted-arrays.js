// https://leetcode.com/problems/median-of-two-sorted-arrays

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 144 ms 42.8 MB
var findMedianSortedArrays = function (nums1, nums2) {
  let len = nums1.length + nums2.length;
  let sum = [...nums1, ...nums2].sort((a, b) => a - b);
  return len % 2 ? sum[~~(len / 2)] : (sum[len / 2 - 1] + sum[len / 2]) / 2;
};
