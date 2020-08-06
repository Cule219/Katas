//www.codewars.com/kata/583203e6eb35d7980400002a
function countSmileys(arr) {
  return arr.filter((f) => f.match(/(:|;)(~|-){0,1}(\)|D)/)).length;
}
