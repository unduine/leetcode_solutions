
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	var res [][]int
	var level []*TreeNode
	var nextLevel = []*TreeNode{root}

	for len(nextLevel) > 0 {
		level = nextLevel
		nextLevel = []*TreeNode{}
		res = append(res, []int{})

		for _, node := range level {
			res[len(res)-1] = append(res[len(res)-1], node.Val)
			if node.Left != nil {
				nextLevel = append(nextLevel, node.Left)
			}
			if node.Right != nil {
				nextLevel = append(nextLevel, node.Right)
			}
		}
	}

	return res
}
