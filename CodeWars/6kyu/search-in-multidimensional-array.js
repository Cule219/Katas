// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae
const locate = (arr, value) => {
  return flat(arr).includes(value);
};

function flat(arr) {
  return arr.reduce(
    (a, v) => (Array.isArray(v) ? [...a, ...flat(v)] : [...a, v]),
    []
  );
}
