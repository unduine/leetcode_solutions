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
 * @return {boolean}
 */
var isValidBST = function(tree, minValue = -Infinity, maxValue = Infinity) {
  if (!tree) return true;
  if (tree.val <= minValue || tree.val >= maxValue) return false;
  return isValidBST(tree.left, minValue, tree.val) && isValidBST(tree.right, tree.val, maxValue);
}

