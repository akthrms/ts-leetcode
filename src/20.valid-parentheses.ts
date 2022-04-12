/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
  const chars = s.split("");
  let stack: string[] = [];
  for (const c of chars) {
    if (c === "(" || c === "[" || c === "{") {
      stack.push(c);
    }
    if (c === ")" && stack.pop() !== "(") {
      return false;
    }
    if (c === "]" && stack.pop() !== "[") {
      return false;
    }
    if (c === "}" && stack.pop() !== "{") {
      return false;
    }
  }
  return stack.length === 0;
}
// @lc code=end
