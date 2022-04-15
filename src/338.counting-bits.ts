/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  let binaries: string[] = [];

  for (let i = 0; i < n + 1; i++) {
    binaries.push(i.toString(2));
  }

  return binaries.map((binary) =>
    binary.split("").reduce((total, str) => total + parseInt(str), 0)
  );
}
// @lc code=end
