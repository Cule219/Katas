// https://www.codewars.com/kata/54e320dcebe1e583250008fd/solutions/javascript

const stupidEncoding = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function dec2FactString(nb) {
  const factorials = [1];
  if (factorials[factorials.length - 1] < nb) {
    generateFactorials(factorials, nb);
  }
  let res = "";
  const rem = nb;
  for (let i = factorials.length - 2; i >= 0; i--) {
    res += stupidEncoding[~~(nb / factorials[i])];
    nb %= factorials[i];
  }
  return res;
}
function factString2Dec(str) {
  const factorials = [1];
  if (factorials.length < str.length) {
    generateFactorials(factorials, null, str.length);
  }
  return str
    .split("")
    .reverse()
    .reduce((a, v, i) => stupidEncoding.indexOf(v) * factorials[i] + a, 0);
}

function generateFactorials(factorials, n, l) {
  if (l) {
    while (factorials.length < l) {
      factorials.push(factorials[factorials.length - 1] * factorials.length);
    }
  } else {
    while (factorials[factorials.length - 1] < n) {
      factorials.push(factorials[factorials.length - 1] * factorials.length);
    }
  }
}
