/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const sortedS = s.split("").sort();
  const sortedT = t.split("").sort();

  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
}
// @lc code=end
