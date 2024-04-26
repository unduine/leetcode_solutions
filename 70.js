// Fibonacci solution
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let curr = 0;
    let last = 1;

    while (n >= 0) {
        const temp = last;
        last = curr;
        curr = curr + temp;
        n--;
    }

    return curr;
};

