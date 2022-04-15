/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let prevDaysMaxProfit = 0;
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    const diff = prices[i] - prices[i - 1];
    const tmp = prevDaysMaxProfit + diff;
    prevDaysMaxProfit = Math.max(0, tmp);
    result = Math.max(result, prevDaysMaxProfit);
  }

  return result;
}
// @lc code=end
