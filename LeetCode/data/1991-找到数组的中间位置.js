/*
 * @Date: 2022-07-01 16:49:43
 * @Description: https://leetcode.cn/problems/find-the-middle-index-in-array/
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// const findMiddleIndex = function(nums) {
//     if (!nums.length) {
//         return -1;
//     }
//     let middleIndex = 0;
//     let leftSum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         i > 0 && (leftSum += nums[middleIndex - 1]); 
//         const rightSum = [...nums].splice(middleIndex+1).reduce((pre, cur) => {
//             return pre + cur;
//         }, 0);
//         if (leftSum === rightSum) {
//             return middleIndex;
//         }
//         middleIndex += 1;
//     }
//     return -1;
// };
const findMiddleIndex = function(nums) {
    const sum = nums.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    let leftSum = 0;
    for(let i = 0; i < nums.length; i++) {
        i > 0 && (leftSum += nums[i - 1]);
        const rightSum = (sum  - nums[i]) / 2;
        if (leftSum === rightSum) {
            return i;
        }
    }
    return -1;
};
const nums1 = [4, 0];
console.log(findMiddleIndex(nums1));
const nums2 = [2,3,-1,8,4];
console.log(findMiddleIndex(nums2));
