/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  const str = s
    .split("")
    .filter((c) => {
      const code = c.charCodeAt(0);
      return (
        (code > 47 && code < 58) ||
        (code > 64 && code < 91) ||
        (code > 96 && code < 123)
      );
    })
    .map((c) => c.toLocaleLowerCase());
  return str.toString() === str.reverse().toString();
}
// @lc code=end
