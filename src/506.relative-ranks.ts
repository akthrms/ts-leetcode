/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
type RelativeRank = {
  index: number;
  score: number;
};

function findRelativeRanks(score: number[]): string[] {
  let relativeRanks: RelativeRank[] = [];

  for (const [i, num] of score.entries()) {
    relativeRanks.push({ index: i, score: num });
  }

  const sorted = relativeRanks.sort((a, b) => b.score - a.score);

  let result: string[] = new Array(score.length);

  for (let i = 0; i < score.length; i++) {
    if (i === 0) {
      result[sorted[i].index] = "Gold Medal";
    } else if (i === 1) {
      result[sorted[i].index] = "Silver Medal";
    } else if (i === 2) {
      result[sorted[i].index] = "Bronze Medal";
    } else {
      result[sorted[i].index] = (i + 1).toString();
    }
  }

  return result;
}
// @lc code=end
