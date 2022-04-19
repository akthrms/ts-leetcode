/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let result = [];
  let mustAdd = true;

  for (const digit of digits.reverse()) {
    if (mustAdd) {
      if (digit === 9) {
        result.push(0);
      } else {
        result.push(digit + 1);
        mustAdd = false;
      }
    } else {
      result.push(digit);
      mustAdd = false;
    }
  }

  if (mustAdd) {
    result.push(1);
  }

  return result.reverse();
}
// @lc code=end
