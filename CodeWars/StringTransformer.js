function stringTransformer(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(char => {
      if (char.toUpperCase() === char) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
}
