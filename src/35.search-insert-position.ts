/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let result = nums.length;
  for (const [i, num] of nums.entries()) {
    if (num < target) {
      continue;
    }
    result = i;
    break;
  }
  return result;
}
// @lc code=end
