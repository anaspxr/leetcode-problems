class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var isSameTree = function (p, q) {
  if (p === null) {
    if (q === null) return true;
    return false;
  }
  if (q === null) return false;

  function traverse(node1, node2) {
    if (node1.left) {
      if (!node2.left) return false;
      if (!traverse(node1.left, node2.left)) return false;
    } else if (node2.left) return false;
    if (node1.right) {
      if (!node2.right) return false;
      if (!traverse(node1.right, node2.right)) return false;
    } else if (node2.right) return false;
    return node1.val === node2.val;
  }
  return traverse(p, q);
};

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(1));
const tree2 = new TreeNode(1, new TreeNode(1), new TreeNode(2));

console.log(isSameTree(tree1, tree2));
