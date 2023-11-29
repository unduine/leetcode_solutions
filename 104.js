var maxDepth = function(root) {
  if (root == null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
  // if (!root?.value) return 0;
  // return level + nodeDepths(root.left, level + 1) + nodeDepths(root.right, level + 1);
}

