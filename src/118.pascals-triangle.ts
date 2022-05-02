/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
function generate(numRows: number): number[][] {
  let result: number[][] = [];
  result[0] = [1];

  for (let i = 1; i < numRows; i++) {
    const tmpRow = [...result[i - 1], 1];
    const tmpRowLen = tmpRow.length;
    let newRow: number[] = [];

    for (let j = 0; j < tmpRowLen; j++) {
      if (j === 0 || j === tmpRowLen - 1) {
        newRow.push(1);
      } else {
        newRow.push(tmpRow[j - 1] + tmpRow[j]);
      }
    }

    result[i] = newRow;
  }

  return result;
}
// @lc code=end
