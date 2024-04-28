/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  function dfs(root) {
    if (!root) {
      return -1;
    }
    console.log("root.val", root.val);
    const left = dfs(root.left) + 1;
    const right = dfs(root.right) + 1;
    const sum = left + right;
    if (sum > diameter) {
      diameter = sum;
    }
    return Math.max(left, right);
  }
  dfs(root);

  return diameter;
};
