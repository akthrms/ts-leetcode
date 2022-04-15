/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  let sorted = nums.sort();

  for (let i = 1; i < sorted.length; i += 2) {
    if (sorted[i] !== sorted[i - 1]) {
      return sorted[i - 1];
    }
  }

  return sorted[sorted.length - 1];
}
// @lc code=end
