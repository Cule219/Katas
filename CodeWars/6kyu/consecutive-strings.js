// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
function longestConsec(strarr, k) {
  return strarr.length === 0 || k > strarr.length || k <= 0
    ? ""
    : strarr.reduce(
        (a, _, i) =>
          strarr.slice(i, i + k).join("").length > a.length
            ? strarr.slice(i, i + k).join("")
            : a,
        ""
      );
}
