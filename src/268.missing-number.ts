/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
  const sortedNums = nums.sort((a, b) => a - b);

  let i = 0;
  let cur = 0;

  while (true) {
    if (sortedNums[i] !== cur) {
      break;
    }

    i += 1;
    cur += 1;
  }

  return cur;
}
// @lc code=end
