/*
 * @lc app=leetcode id=2108 lang=typescript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
function firstPalindrome(words: string[]): string {
  for (const word of words) {
    if (word === word.split("").reverse().join("")) {
      return word;
    }
  }

  return "";
}
// @lc code=end
