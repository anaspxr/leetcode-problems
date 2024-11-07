class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var inorderTraversal = function (root) {
  const res = [];
  function rec(node) {
    if (node.left) {
      rec(node.left);
    }
    res.push(node.val);
    if (node.right) {
      rec(node.right);
    }
  }

  if (!root) return res;

  rec(root);
  return res;
};

const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3)));
console.log(inorderTraversal(root)); // [1, 3, 2]
