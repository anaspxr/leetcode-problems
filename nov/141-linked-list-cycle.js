var hasCycle = function (head) {
  let slow = head;
  let fast = head?.next;

  while (fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};
