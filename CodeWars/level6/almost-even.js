// https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b/solutions/javascript

/**
 * Returns a [parts]-length array of equal or nearly equal
 * integers that add up to [num].
 */
var splitInteger = function (num, parts) {
  // Complete this function
  let rem = num % parts;
  return Array.from({ length: parts }, (e, i) => {
    let add = parts - 1 - i >= rem ? 0 : 1;
    return ~~(num / parts) + add;
  });
};
