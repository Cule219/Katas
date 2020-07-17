//www.codewars.com/kata/526571aae218b8ee490006f4
https: var countBits = function (n) {
  // Program Me
  return [...n.toString(2)].reduce((a, v) => (v == 0 ? a : (a += 1)), 0);
};
