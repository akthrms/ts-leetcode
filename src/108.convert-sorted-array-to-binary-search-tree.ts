/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return makeTreeNode(nums, 0, nums.length - 1);
}

function makeTreeNode(
  nums: number[],
  low: number,
  high: number
): TreeNode | null {
  if (low > high) {
    return null;
  } else {
    const middle = Math.floor((high + low) / 2);
    let treeNode = new TreeNode(nums[middle]);
    treeNode.left = makeTreeNode(nums, low, middle - 1);
    treeNode.right = makeTreeNode(nums, middle + 1, high);
    return treeNode;
  }
}
// @lc code=end
