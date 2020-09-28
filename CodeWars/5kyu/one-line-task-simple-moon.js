moonRating = (x) =>
  ("o".repeat((x += 0.5) >> 1) + ["c"[~x & 1]]).padEnd(5, "x");
