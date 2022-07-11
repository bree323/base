/*
 * @Date: 2022-07-08 17:12:03
 * @Description: 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
    必须使用时间复杂度为 O(log n) 的算法。
 */

const nums1 = [1, 3, 5, 6],
  target1 = 5; // 2
const nums2 = [1, 3, 5, 6],
  target2 = 2; // 1
const nums3 = [1, 3, 5, 6],
  target3 = 7; // 4
const nums4 = [1, 2, 4, 6, 7],
  target4 = 3; // 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   // 定义左右下标
//   let left = 0,
//     right = nums.length - 1;
//   while (left <= right) {
//     let mid = left + Math.floor((right - left) / 2);
//     if (nums[mid] == target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       left = mid + 1;
//     } else if (nums[mid] > target) {
//       right = mid - 1;
//     }
//   }
//   return left;
// };
var searchInsert = function (nums, target) {
  // 定义左右下标
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const midVal = nums[mid];
    if (target > midVal) {
        left = mid + 1;
    } else {
        right = mid - 1;
    }
  }
  return left
};

// console.log(searchInsert(nums1, target1)); // 2
// console.log(searchInsert(nums2, target2)); // 1
// console.log(searchInsert(nums3, target3)); // 4
console.log(searchInsert(nums3, 0)); // 0
// console.log(searchInsert(nums4, target4)); // 2
