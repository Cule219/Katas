// https://leetcode.com/problems/multiply-strings/submissions/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Runtime: 228 ms, faster than 9.81% of JavaScript online submissions for Multiply Strings.
 * Memory Usage: 45.1 MB, less than 7.77% of JavaScript online submissions for Multiply Strings.
 */
var multiply = function (num1, num2) {
  return [...num2]
    .reverse()
    .reduce((a, v, i) => {
      const no = bigIntMultiply(num1, +v) + "0".repeat(i);
      return bigIntAdd(no, a);
    }, "0")
    .match(/(0*)(.*.)/)[2];
};

const bigIntAdd = (bigInt1, bigInt2) => {
  let [lengthier, shorter] =
    bigInt1.length > bigInt2.length ? [bigInt1, bigInt2] : [bigInt2, bigInt1];
  shorter = [...shorter].reverse();
  return [...lengthier]
    .reverse()
    .reduce((a, v, i) => {
      let no = +v + Number(shorter[i] || 0) + (a[i] || 0);
      let over = ~~(no / 10);
      a[i] = no % 10;
      a[i + 1] = over ? over : undefined;
      return a;
    }, [])
    .reverse()
    .join("");
};

const bigIntMultiply = (bigInt, int) => {
  return [...bigInt]
    .reverse()
    .reduce((a, v, i) => {
      let no = (a[i] || 0) + v * int;
      let over = ~~(no / 10);
      a[i] = no % 10;
      a[i + 1] = over ? over : undefined;
      return a;
    }, [])
    .reverse()
    .join("");
};
