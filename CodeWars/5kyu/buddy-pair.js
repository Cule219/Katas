// https://www.codewars.com/kata/59ccf051dcc4050f7800008f
function buddy(start, limit) {
  let store = {};
  for (let i = start; i <= limit; i++) {
    store[i] ? store[i] : (store[i] = getDivisorSum(i));
    baseSum = store[i];
    if (baseSum - 1 > start) {
      store[baseSum - 1]
        ? store[baseSum - 1]
        : (store[baseSum - 1] = getDivisorSum(baseSum - 1));
      secondSum = store[baseSum - 1];
      if (secondSum === i + 1) return [i, baseSum - 1];
    }
  }
  return "Nothing";
}

function getDivisorSum(n) {
  let divisors = [1];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i !== n / i) divisors.push(n / i);
      divisors.push(i);
    }
  }
  return divisors.reduce((a, b) => a + b, 0);
}
