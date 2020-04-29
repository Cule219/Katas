function solve(arr) {
  const [x, y, z] = arr.slice().sort((a, b) => a - b);
  return Math.min(x + y, Math.floor((x + y + z) / 2));
}
