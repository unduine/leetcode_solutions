// Fibonacccy solution
impl Solution {
    pub fn climb_stairs(n: i32) -> i32 {
        let mut curr = 1;
        let mut prev = 0;

        for n in 0..n {
            (curr, prev) = (curr + prev, curr);
        }

        return curr;
    }
}

