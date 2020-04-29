function moreZeros(s) {
  return [
    ...new Set(
      [...s].filter(
        (c, i) =>
          c
            .charCodeAt(0)
            .toString(2)
            .split("")
            .reduce((a, v) => (v > 0 ? a-- : a++, a), 0) > 0
      )
    )
  ];
}
