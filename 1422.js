/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let zero = 0;
  let one = 0;
  let max = 0;

  // count all one in right
  for (let i = 0; i < s.length; i++) {
    if (s[i] == 1) {
      one += 1;
    };
  }

  for (let j = 0; j < s.length - 1; j++) {
    if (s[j] == 0) {
      zero += 1;
    } else {
      one -= 1;
    }
    max = Math.max(zero + one, max);
  }

  return max;
};

