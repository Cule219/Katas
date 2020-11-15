// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6/solutions/javascript

function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join("") || 0);
  let arrayToNumber2 = parseInt(array2.join("") || 0);
  const no = arrayToNumber1 + arrayToNumber2;
  return no !== 0
    ? Math.abs(no)
        .toString()
        .split("")
        .map((s, i) => (i === 0 ? Number(s) * Math.sign(no) : Number(s)))
    : [];
}
