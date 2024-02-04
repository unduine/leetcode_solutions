/**
 * @param {string[]} bank
 * @return {number}
 */

const countDevices = (str) => {
  let res = 0;
  for (let char of str) {
    res += +char;
  }
  return res;
}

var numberOfBeams = function(bank) {
  let prev = countDevices(bank[0]);
  let res = 0;

  for (let i = 1; i < bank.length; i++) {
    const curr = countDevices(bank[i]);
    console.log(curr)
    if (curr) {
      res += curr * prev;
      prev = curr;
    }
  }

  return res;
};

