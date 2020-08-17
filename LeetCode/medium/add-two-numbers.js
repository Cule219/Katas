// https://leetcode.com/problems/add-two-numbers
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
// Solution one 188ms 45MB
var addTwoNumbers = function (l1, l2) {
  let result;
  let lastNode;
  let left = 0;
  while (l1 || l2 || left) {
    let n1 = l1 ? l1.val : 0;
    l1 = l1 ? l1.next : undefined;

    let n2 = l2 ? l2.val : 0;
    l2 = l2 ? l2.next : undefined;

    let current = n2 + n1 + left;
    left = ~~(current / 10);

    let newNode = new ListNode(current % 10);
    lastNode
      ? ((lastNode.next = newNode), (lastNode = newNode))
      : ((lastNode = newNode), (result = newNode));
  }
  console.log(result);
  return result;
};

// Solution 2 144ms 42.8MB
var addTwoNumbers = function (l1, l2) {
  let res = new ListNode();
  let temp = res;
  let bump = 0;
  do {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    temp.val = (val1 + val2 + bump) % 10;
    bump = val1 + val2 + bump >= 10 ? 1 : 0;
    l1 = l1 ? l1.next : 0;
    l2 = l2 ? l2.next : 0;
    if (l1 || l2 || bump) {
      temp.next = new ListNode();
      temp = temp.next;
    }
  } while (l1 || l2 || bump);
  return res;
};
