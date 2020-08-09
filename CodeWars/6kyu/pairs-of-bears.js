function bears(x, s) {
  const res = (s.match(/(B8|8B)+/g) || []).join("");
  return [res, res.length / 2 >= x];
}
