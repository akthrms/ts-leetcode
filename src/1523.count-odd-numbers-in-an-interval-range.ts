/*
 * @lc app=leetcode id=1523 lang=typescript
 *
 * [1523] Count Odd Numbers in an Interval Range
 */

// @lc code=start
function countOdds(low: number, high: number): number {
  let result = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 !== 0) {
      result += 1;
    }
  }

  return result;
}
// @lc code=end
