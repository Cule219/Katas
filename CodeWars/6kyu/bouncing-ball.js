// https://www.codewars.com/kata/5544c7a5cb454edb3c000047
function bouncingBall(h, bounce, window, count = 0) {
  if (h < 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  count++;
  h *= bounce;
  return h > window ? bouncingBall(h, bounce, window, 1 + count) : count;
}
