// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
snail = function (array) {
  // enjoy
  let n = array.length - 2;
  let sol = [...array[0]];
  let x = 0;
  let y = n + 1;
  let d = 0;
  while (n >= 0) {
    for (let i = n; i >= 0; i--) {
      if (d === 0) {
        x++;
      } else if (d === 1) {
        y--;
      } else if (d === 2) {
        x--;
      } else if (d === 3) {
        y++;
      }
      sol.push(array[x][y]);
    }
    if (d % 2) n -= 1;
    d = (d + 1) % 4;
  }
  return sol;
};
