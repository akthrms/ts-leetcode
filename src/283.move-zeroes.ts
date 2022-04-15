/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let zeroIndexList = [];

  for (const [i, num] of nums.entries()) {
    if (num === 0) {
      zeroIndexList.push(i);
    }
  }

  while (zeroIndexList.length !== 0) {
    const index = zeroIndexList.pop();
    nums.splice(index, 1);
    nums.push(0);
  }
}
// @lc code=end
