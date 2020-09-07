// https://leetcode.com/problems/longest-substring-without-repeating-characters

/**
 * @param {string} s
 * @return {number}
 */
// 304 ms 44.3 MB
var lengthOfLongestSubstring = function (s) {
  return [...s].reduce((a, v, i) => {
    let len = "";
    let ind = i;
    while (len.indexOf(s[ind]) === -1 && ind < s.length) {
      len += s[ind];
      ind++;
    }
    return len.length > a ? len.length : a;
  }, 0);
};
