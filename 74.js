/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let pointerY = 0;
  let pointerX = matrix[0].length - 1;
  while (pointerY < matrix.length && pointerX >= 0) {
    const curr = matrix[pointerY][pointerX];
    if (curr == target) {
      return true;
    } else if (curr > target) {
      pointerX -= 1;
    } else if (curr < target) {
      pointerY += 1;
    }
  }
  return false;
};

