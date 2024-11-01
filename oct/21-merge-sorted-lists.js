/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 *
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

let count = 1;

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  const mainList = list2.val < list1.val ? list2 : list1;
  let firstNode = mainList;
  let secondNode = list2.val < list1.val ? list1 : list2;

  while (true) {
    if (firstNode.next === null) {
      firstNode.next = secondNode;
      return mainList;
    }
    if (secondNode.val < firstNode.next.val) {
      const temp = firstNode.next;
      firstNode.next = secondNode;
      secondNode = temp;
      firstNode = firstNode.next;
    } else {
      firstNode = firstNode.next;
    }
  }
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

console.log("hi", mergeTwoLists(list1, list2));
