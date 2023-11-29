var invertTree = function(root) {
  function invert(node) {
    if (node?.left || node?.right) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      invert(node.left);
      invert(node.right);
    }
  }
  invert(root);
  return root;
};

