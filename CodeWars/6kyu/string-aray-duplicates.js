// https://www.codewars.com/kata/59f08f89a5e129c543000069
function dup(s) {
  return s.map((c) => c.replace(/(.)(?=\1)/gi, ""));
}
