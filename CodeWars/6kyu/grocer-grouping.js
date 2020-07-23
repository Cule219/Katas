// https://www.codewars.com/kata/593c0ebf8b90525a62000221
function solution(input) {
  const keys = input.split(",").reduce(
    (a, v) => {
      const [key, value] = v.split("_");
      a[key] ? a[key].push(value) : a.other.push(value);
      return a;
    },
    { fruit: [], meat: [], other: [], vegetable: [] }
  );
  return Object.keys(keys)
    .map((key) => `${key}:${keys[key].sort().join(",")}`)
    .join("\n");
}
