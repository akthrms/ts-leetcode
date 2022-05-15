/*
 * @lc app=leetcode id=2124 lang=typescript
 *
 * [2124] Check if All A's Appears Before All B's
 */

// @lc code=start
function checkString(s: string): boolean {
  if (s.length < 2) {
    return true;
  }

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] + s[i] === "ba") {
      return false;
    }
  }

  return true;
}
// @lc code=end
