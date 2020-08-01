// https://www.codewars.com/kata/564057bc348c7200bd0000ff
function thirt(n) {
  const DIVS = [1, 10, 9, 12, 3, 4];
  const no = [...n.toString()]
    .reverse()
    .reduce((a, v, i) => v * DIVS[i % DIVS.length] + a, 0);
  return no === n ? n : thirt(no);
}
