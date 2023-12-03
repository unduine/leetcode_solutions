
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  /* Result | Old | New
      0     | 0   | 0
      1     | 1   | 0
      2     | 1   | 1
      3     | 0   | 1
  */
  const rows = board.length;
  const cols = board[0].length;
  const mapToZeroOne = (el) => el === 2 || el === 3 ? 1 : 0;
  const getElement = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return 0;
    const element = board[i][j];
    return (element == 1 || element == 2) ? 1 : 0;
  }

  function getNextState(i, j) {
    let counter =
      getElement(i - 1, j - 1) + getElement(i - 1, j) + getElement(i - 1, j + 1) +
      getElement(i + 1, j + 1) + getElement(i + 1, j) + getElement(i + 1, j - 1) +
      getElement(i, j + 1) + getElement(i, j - 1);
    const element = getElement(i, j);
    if ((counter < 2 || counter > 3) && element === 1) { return 1; }
    else if ((counter === 2 || counter === 3) && element === 1) { return 2; }
    else if (counter === 3 && element === 0) { return 3; }
    return 0;
  }

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[0].length; k++) {
      board[i][k] = getNextState(i, k);
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[0].length; k++) {
      board[i][k] = mapToZeroOne(board[i][k]);
    }
  }
};

