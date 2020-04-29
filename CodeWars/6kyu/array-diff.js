function array_diff(a, b) {
  return a.filter((x) => !b.includes(x));
}
