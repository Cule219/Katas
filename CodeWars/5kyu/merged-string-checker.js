// https://www.codewars.com/kata/54c9fcad28ec4c6e680011aa
function isMerge(s, part1, part2) {
  part1 = part1.split("");
  part2 = part2.split("");
  return (
    s
      .split("")
      .map((x, i) => {
        if (part2[0] === part1[0]) {
          if (part2[1] === s[i + 1]) return part2.shift();
          else if (part1[1] === s[i + 1]) return part1.shift();
        }
        if (part1[0] === x) return part1.shift();
        else if (part2[0] === x) return part2.shift();
      })
      .every((c) => c !== undefined) &&
    !part1.length &&
    !part2.length
  ); //+ res1
}
