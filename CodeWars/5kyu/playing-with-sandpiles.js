// https://www.codewars.com/kata/58c5fca35722de3493000081
class Sandpile {
  constructor(piles) {
    // accepts nothing or a string in the form:
    // '123\n456\n789'
    this.piles = (piles || "000\n000\n000")
      .split("\n")
      .map((r) => r.split("").map((x) => Number(x)));
    let i = this.piles.findIndex((x) => x.find((x) => x > 3));
    if (i !== -1)
      this.addTogether(0, [i, this.piles[i].findIndex((x) => x > 3)]);
  }

  add(sandpile) {
    // adds two sandpiles together and returns the result
    for (let i = 0; i < this.piles.length; i++) {
      for (let j = 0; j < this.piles.length; j++) {
        this.addTogether(sandpile.piles[i][j], [i, j]);
      }
    }
    return new Sandpile(this.toString());
  }

  addTogether(num, coords) {
    let [i, j] = coords;
    this.piles[i][j] += num;
    while (this.piles[i] && this.piles[i][j] > 3) {
      this.piles[i][j] -= 4;
      if (this.piles[i - 1] !== undefined) this.piles[i - 1][j] += 1;
      if (this.piles[i + 1] !== undefined) this.piles[i + 1][j] += 1;
      if (this.piles[i][j - 1] !== undefined) this.piles[i][j - 1]++;
      if (this.piles[i][j + 1] !== undefined) this.piles[i][j + 1] += 1;
      i = this.piles.findIndex((x) => x.find((x) => x > 3));
      if (i !== -1) j = this.piles[i].findIndex((x) => x > 3);
    }
  }

  toString() {
    // return this sandpile in the form `123\n123\n123`
    return this.piles.map((r) => r.join("")).join("\n");
  }
}
