function stringTransformer(str) {
  return str
    .split(" ")
    .reverse()
    .join(" ")
    .split("")
    .map(char =>
      char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase()
    )
    .join("");
}
