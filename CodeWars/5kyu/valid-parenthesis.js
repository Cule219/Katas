// https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens) {
  console.log(parens);
  return (
    [...parens].reduce((a, v) => {
      v === "(" ? a++ : a--;
      if (a < 0) return false;
      return a;
    }, 0) === 0
  );
}
