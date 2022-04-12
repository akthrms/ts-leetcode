/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  for (const [i, numI] of nums.entries()) {
    for (const [j, numJ] of nums.entries()) {
      if (i === j) {
        continue;
      }
      if (numI + numJ === target) {
        return [i, j];
      }
    }
  }
  return [];
}
// @lc code=end
