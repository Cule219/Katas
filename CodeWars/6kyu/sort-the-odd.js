// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const ons = array.filter((x) => x % 2).sort((a, b) => a - b);
  return array.map((x) => (x % 2 ? ons.shift() : x));
}
