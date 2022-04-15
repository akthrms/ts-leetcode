/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let map = new Map<number, number>();

  for (const num of nums) {
    if (map.has(num)) {
      const value = map.get(num) + 1;
      map.set(num, value);
    } else {
      map.set(num, 1);
    }
  }

  let result = 0;
  let max = 0;

  for (let [k, v] of map) {
    if (max < v) {
      result = k;
      max = v;
    }
  }

  return result;
}
// @lc code=end
