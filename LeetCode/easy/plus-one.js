// https://leetcode.com/problems/plus-one
/**
 * @param {number[]} digits
 * @return {number[]}
 * Runtime: 80 ms, faster than 46.96% of JavaScript online submissions for Plus One.
 * Memory Usage: 37 MB, less than 5.03% of JavaScript online submissions for Plus One.
 */
var plusOne = function (digits) {
  digits[digits.length - 1]++;
  while (digits.indexOf(10) !== -1) {
    const index = digits.indexOf(10);
    digits[index] %= 10;
    digits[index - 1] ? digits[index - 1]++ : digits.unshift(1);
  }
  return digits;
};

/*
var plusOne = function(digits) {
    for (let i = digits.length - 1; i != -1; i--) {
        if (digits[i] != 9) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1) //Getting here means everything was a 9, so it's now all 0's, meaning we should add a 1 in front.
    return digits
};
*/
