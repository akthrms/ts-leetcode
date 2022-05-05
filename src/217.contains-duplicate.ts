/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  let his: number[] = [];

  for (let num of nums) {
    if (his.some((n) => n === num)) {
      return true;
    }
    his.push(num);
  }

  return false;
}
// @lc code=end
