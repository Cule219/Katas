// https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3409/
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  return (
    /^[a-z]+$/.test(word) ||
    /^[A-Z]{1}[a-z]+$/.test(word) ||
    /^[A-Z]+$/.test(word)
  );
};
