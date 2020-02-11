/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result;
  let lastNode;
  let left = 0;
  while(l1 || l2) {
      let n1 = l1 ? l1.val : 0;
      l1 = l1 ? l1.next : undefined;
      
      let n2 = l2 ? l2.val : 0;
      l2 = l2 ? l2.next : undefined;
      
      let current = n2+n1+left;
      left = ~~(current / 10);
      
      let newNode = new ListNode(current%10);
      lastNode ? (lastNode.next = newNode, lastNode = newNode) : (lastNode = newNode, result = newNode);
      
  }
  console.log(result);
  return result
};