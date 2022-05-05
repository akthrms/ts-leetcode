/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
function isHappy(n: number): boolean {
  const sum = (n: number): number => {
    return n
      .toString()
      .split("")
      .map((s) => Math.pow(parseInt(s), 2))
      .reduce((a, b) => a + b, 0);
  };

  const isAllOne = (n: number): boolean => {
    return (
      n
        .toString()
        .split("")
        .filter((s) => s !== "1").length === 0
    );
  };

  let result = n;
  let history = [];

  while (sum(result) >= 10 || isAllOne(result)) {
    if (sum(result) in history) {
      break;
    } else {
      result = sum(result);
      history.push(result);
    }
  }

  return sum(result) === 1;
}
// @lc code=end
