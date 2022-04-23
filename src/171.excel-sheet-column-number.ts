/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
function titleToNumber(columnTitle: string): number {
  let dict: Record<string, number> = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };

  const columns = columnTitle.split("");
  let result = 0;
  let len = 0;

  while (len < columnTitle.length) {
    const column = columns[len];
    const digit = columnTitle.length - len - 1;
    result += digit > 0 ? 26 ** digit * dict[column] : dict[column];
    len++;
  }

  return result;
}
// @lc code=end
