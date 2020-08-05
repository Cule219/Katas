function customChristmasTree(chars, n) {
  chars = chars.repeat(n * n).split("");
  return (
    [...Array(n).keys()]
      .map((r) => " ".repeat(n - r - 1) + chars.splice(0, 1 + r).join(" "))
      .join("\n") + ("\n" + " ".repeat(n - 1) + "|").repeat(~~(n / 3))
  );
}
