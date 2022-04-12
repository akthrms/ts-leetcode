/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let tmp: number[] = [];
  let result: ListNode | null = null;

  while (list1 !== null) {
    tmp.push(list1.val);
    list1 = list1.next;
  }

  while (list2 !== null) {
    tmp.push(list2.val);
    list2 = list2.next;
  }

  for (const i of tmp.sort((a, b) => b - a)) {
    result = new ListNode(i, result);
  }

  return result;
}
// @lc code=end
