
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  let path = new Set();

  const dfs = (r, c, i) => {
    const currPath = `${r},${c}`;
    if (i == word.length) return true;

    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      word[i] !== board[r][c] ||
      path.has(currPath)) {
      return false;
    }
    path.add(currPath);
    const res = dfs(r, c - 1, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r + 1, c, i + 1);
    path.delete(currPath);
    return res;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (dfs(i, j, 0)) return true;
    }
  }

  return false;
};

