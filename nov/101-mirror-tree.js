var isSymmetric = function (root) {
  if (!root) return true;
  if (!root.left) {
    if (!root.right) return true;
    return false;
  }
  if (!root.right) return false;

  function traverse(node1, node2) {
    if (node1.left) {
      if (!node2.right) return false;
      if (!traverse(node1.left, node2.right)) return false;
    } else if (node2.right) return false;
    if (node1.right) {
      if (!node2.left) return false;
      if (!traverse(node1.right, node2.left)) return false;
    } else if (node2.left) return false;
    return node1.val === node2.val;
  }
  return traverse(root.left, root.right);
};
