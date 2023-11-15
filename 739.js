let top = function(a) {
  return a[a.length - 1];
}
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
let dailyTemperatures = function(temperatures) {
  let stack = [];
  let ans = Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[top(stack)] < temperatures[i]) {
      let index = stack.pop();
      ans[index] = i - index;
    }
    stack.push(i);
  }

  return ans;
};

