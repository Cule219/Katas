// https://www.codewars.com/kata/5e9df3a0a758c80033cefca1/solutions/javascript
function noOrder(s) {
  let nums = s.split(/[.,\/\+\*\%\^-]/g).map((x) => x.replace(/ /g, ""));
  let oper = " " + s.replace(/[0-9 ]/g, "");
  let res = nums.reduce(
    (a, v, i) => (
      oper[i] === "^" ? (a = Math.pow(a, v)) : (a = eval(a + oper[i] + v)),
      Math.floor(a)
    )
  );
  return isFinite(eval(res)) ? eval(res) : null;
}
