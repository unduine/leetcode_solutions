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
var goodNodes = function(node, max = node.val) {
  if (!node) return 0;
  max = Math.max(max, node.val);
  const counterPlus = node.val < max ? 0 : 1;
  return goodNodes(node.left, max) + goodNodes(node.right, max) + counterPlus;
}

