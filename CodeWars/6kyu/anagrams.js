// https://www.codewars.com/kata/587e18b97a25e865530000d8

function anagramCounter(wordsArray) {
  return wordsArray.reduce(
    (a, v, i) => (
      (a += wordsArray
        .slice(i + 1)
        .filter((word) => [...word].sort().join() === [...v].sort().join())
        .length),
      a
    ),
    0
  );
}
