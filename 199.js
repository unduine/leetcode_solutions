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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let temp = [];
    !isNil(root) && temp.push(root);
    const res = [];

    while (temp.length) {
        const el = temp.at(-1)?.val;
        !isNil(el) && res.push(el);
        const newTemp = [];
        for (let i of temp) {
            !isNil(i?.left) && newTemp.push(i.left);
            !isNil(i?.right) && newTemp.push(i.right);
        }
        temp = newTemp; 
    }

    return res;
};

function isNil(val) {
    return val == undefined || val == null;
}

