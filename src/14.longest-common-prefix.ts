/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  const sorted = strs.sort();
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  let i = 0;

  while (i < first.length) {
    if (first[i] === last[i]) {
      i++;
    } else {
      break;
    }
  }

  return i == 0 ? "" : first.substring(0, i);
}
// @lc code=end
