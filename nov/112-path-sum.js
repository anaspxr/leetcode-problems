class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var hasPathSum = function (root, targetSum) {
  function find(node, current) {
    console.log(current, node.val);

    if (!node.left && !node.right) {
      console.log(current + node.val);
      if (current + node.val === targetSum) return true;
    }
    if (node.left && find(node.left, current + node.val)) {
      return true;
    }
    if (node.right && find(node.right, current + node.val)) {
      return true;
    }
    return false;
  }
  if (!root) return false;

  return find(root, 0);
};

const root = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))),
  new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
);

console.log(hasPathSum(root, 22)); // true
