/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
  let r = x;

  while (r * r > x) {
    r = ((r + x / r) / 2) | 0;
  }

  return r;
}
// @lc code=end
