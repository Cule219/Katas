// https://www.codewars.com/kata/5c9d62cbf1613a001af5b067
function radixTree(...a) {
  return reduce(a);
}

let reduce = (a, obj = {}) => {
  a.forEach((word) => {
    if (word) {
      let no = (index) =>
        a.filter(
          (w) => index <= w.length && w.slice(0, index) === word.slice(0, index)
        );
      let i = 1;
      while (no(i).length > 1 && no(i).length === no(i + 1).length) i++;
      let full = no(i);
      if (full.length > 1) {
        let rest = no(i)
          .filter((w) => w !== "")
          .map((w) => w.slice(i));
        let cur = word.slice(0, i);
        if (obj[cur] === undefined && rest.length) {
          obj[cur] = {};
          reduce(rest, obj[cur]);
        }
      } else {
        obj[word] = {};
      }
    }
  });
  return obj;
};
