/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < cols; k++) {
      const el = matrix[i][k];
      let x = 0;
      let y = 0;
      if (el == 0) {
        while (x < cols) {
          const test = matrix[i][x];
          if (matrix[i][x] !== 0) {
            matrix[i][x] = null;
          }
          x += 1;
        }
        while (y < rows) {
          if (matrix[y][k] !== 0) {
            matrix[y][k] = null;
          }
          y += 1;
        }
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let k = 0; k < cols; k++) {
      if (matrix[i][k] === null) {
        matrix[i][k] = 0;
      }
    }
  }

  return matrix;
};

