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
  let level = [];
  let nextLevel = [root];

  while (nextLevel.length) {
    level = nextLevel;
    nextLevel = [];
    res.push([]);

    for (node of level) {
      res.at(-1).push(node.val);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    }
  }

  return res;
};
