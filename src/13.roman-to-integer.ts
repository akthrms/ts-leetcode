/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
  const romans: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let prev = 0;
  let result = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const curr = romans[s[i]];

    if (prev > curr) {
      result -= curr;
    } else {
      result += curr;
    }

    prev = curr;
  }

  return result;
}
// @lc code=end
