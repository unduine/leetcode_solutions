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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }
  const res = [];
  let q = [root];

  while (q.length) {
    const newQ = [];
    const level = [];
    for (node of q) {
      level.push(node.val);
      if (node.left) newQ.push(node.left);
      if (node.right) newQ.push(node.right);
    }
    q = newQ;
    res.push(level);
  }

  return res;
};
