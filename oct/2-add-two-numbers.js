/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  function fun(node1, node2) {
    const node1Val = node1?.val || 0;
    const node2Val = node2?.val || 0;
    const sum = node1Val + node2Val + currentNode.val;
    currentNode.val = sum % 10;
    currentNode.next = new ListNode(Math.floor(sum / 10));
    if (!node1?.next && !node2?.next) return;
    currentNode = currentNode.next;
    fun(node1?.next, node2?.next);
  }

  let currentNode;
  const newL = new ListNode(0);
  currentNode = newL;

  fun(l1, l2);

  currentNode.next = null;

  return newL;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

console.log(addTwoNumbers(l1, l2)); // [7, 0, 8]
