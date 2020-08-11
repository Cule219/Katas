// https://www.codewars.com/kata/5c1bb0d96a9c5537ad000230
// dictionary of symbols for short and long syllables.
const syllables = {
  short: [".", "*", "x"],
  long: ["/", "_"],
};
// types
const meters = ["spondee", "trochee", "iamb", "pyrrhic"];
// return the type of meter
const identifyMeter = (str) => {
  if (str.match(/[^\.\*x\/_]/g)) return "What is this?";
  else if (str.length !== 2) return "Not a dissyllable.";
  str = str.replace(/[x\*\.]/g, "1").replace(/[\/_]/g, "0");
  return meters[parseInt(str, 2)];
};
