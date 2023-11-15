/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var rotate = function(matrix) {
  const length = matrix.length;

  for (let i = 0; i < length; i++) {
    for (let j = i; j < length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < (length / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][length - 1 - j];
      matrix[i][length - 1 - j] = temp;
    }
  }
};

