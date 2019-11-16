function nbYear(p0, percent, aug, p) {
  let years = 0;
  while (p > p0) {
    p0 = p0 * (1 + percent / 100) + aug;
    years++;
  }
  return years;
}