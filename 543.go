/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func diameterOfBinaryTree(root *TreeNode) (res int) {
	var dfs func(*TreeNode) int
	dfs = func(node *TreeNode) int {
		if node == nil {
			return -1
		}

		left := dfs(node.Left) + 1
		right := dfs(node.Right) + 1

		res = int(math.Max(float64(res), float64(left+right)))

		return int(math.Max(float64(left), float64(right)))
	}

	dfs(root)

	return
}

