/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let duplicates = new Set();
  let duplicateIndexList = [];

  for (const [i, num] of nums.entries()) {
    if (duplicates.has(num)) {
      duplicateIndexList.push(i);
    } else {
      duplicates.add(num);
    }
  }

  for (const i of duplicateIndexList.reverse()) {
    nums.splice(i, 1);
    nums.push(0);
  }

  return nums.length - duplicateIndexList.length;
}
// @lc code=end
