//www.codewars.com/kata/527f782024b930114700076e
https: function getMoves(board) {
  let b = board.getRodTops();
  let one = b[0] ? 1 : 0;
  let two = b[1] ? 2 : one ? 2 : 1;
  let start = 3 - one - two;
  let steps = [];
  towerOfHanoi(board.getDifficulty(), start, one, two, steps);
  return steps;
}

function towerOfHanoi(n, start, to, spare, steps) {
  if (n === 1) {
    steps.push(start, to);
    return;
  }
  towerOfHanoi(n - 1, start, spare, to, steps);
  steps.push(start, to);
  towerOfHanoi(n - 1, spare, to, start, steps);
}
