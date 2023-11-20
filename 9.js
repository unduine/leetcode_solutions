/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = x.toString();
  if (x.length == 0) return true;
  if (x[0] == "-") return false;

  let i = 0;
  while (i < x.length) {
    if (x.at(i) !== x.at(-i - 1)) return false;
    i += 1;
  }
  return true;
};

