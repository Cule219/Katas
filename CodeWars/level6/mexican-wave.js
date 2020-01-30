function wave(str) {
  let waved = str
    .split("")
    .map(
      (letter, index) =>
        str.slice(0, index) + letter.toUpperCase() + str.slice(index + 1)
    );
  return waved.filter(word => word != str);
}
