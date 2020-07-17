// https://www.codewars.com/kata/5679aa472b8f57fb8c000047
function findEvenIndex(arr) {
  return arr.reduce(
    (a, v, i) =>
      arr.slice(0, i).reduce((a, v) => a + v, 0) ===
      arr.slice(i + 1).reduce((a, v) => a + v, 0)
        ? i
        : a,
    -1
  );
}
