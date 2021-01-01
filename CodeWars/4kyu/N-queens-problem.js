class Queen {
  constructor(i, fixed = false) {
    this.row = i;
    this.j = null;
    // store only j in here; if all available j's are exhausted change the above row's queen;
    this.history = [];
    this.fixed = fixed;
  }
  setQueen = (row) => {
    // if the queen has the position set, return it
    if (this.j) {
      return this.j;
    }
    // returns the position in the row or false;
    const pos = row.findIndex((p, i) => p === 0 && !this.history.includes(i));
    if (~pos) {
      this.j = pos;
      return pos;
    }
    return false;
  };
  cleanHistory = () => {
    // if the queen on the row above this one moves, clean the history;
    this.history = [];
  };
  markPositionUnusable = () => {
    // make the queen available for the move to the next available position
    this.history.push(this.j);
    this.j = null;
  };
}

class Board {
  constructor(n) {
    this.board = Array.from({ length: n }, (_) => new Array(n).fill(0));
    this.queens = Array.from({ length: n }, (_, i) => new Queen(i));
    this.diagonals = [this.diagonal(n), this.diagonal(n, 1)];
    this.solution = [];
    this.length = n;
  }

  // remember how many queens set and store the array
  solveBoard = () => {
    // to finish either first queen has no more options or we found the solution
    for (let i = 0; i < this.length; i++) {
      const position = this.queens[i].setQueen(this.board[i]);
      if (position === false || position === undefined) {
        this.queens[i].cleanHistory();
        // reset the board
        this.board = Array.from({ length: this.length }, (_) =>
          new Array(this.length).fill(0)
        );
        this.solution = [];
        const queenAbove = this.queens[i - 1];
        i = -1;
        if (queenAbove) {
          queenAbove.markPositionUnusable();
        } else {
          // this is no solution condition
          return [];
        }
        continue;
      }
      this.solution.push(position);
      this.setAQueen(i, position);
    }
    return this.solution;
  };

  setAQueen(i, j) {
    this.board[i][j] = 2;
    const dia = this.diagonals.map((d) =>
      d.find((r) => JSON.stringify(r).includes(`[${i},${j}]`))
    );
    dia
      .reduce((a, v) => [...a, ...v], [])
      .forEach((p) => {
        if (this.board[p[0]][p[1]] === 0) {
          this.board[p[0]][p[1]] = 1;
        }
      });
    for (let g = 0; g < this.board.length; g++) {
      if (this.board[i][g] === 0) this.board[i][g] = 1;
      if (this.board[g][j] === 0) this.board[g][j] = 1;
    }
  }

  diagonal(n, bottomToTop) {
    let array = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, ind) => [i, ind])
    );
    var temp,
      returnArray = [];
    for (var k = 0; k <= 2 * (array.length - 1); ++k) {
      temp = [];
      for (var y = array.length - 1; y >= 0; --y) {
        var x = k - (bottomToTop ? array.length - 1 - y : y);
        if (x >= 0 && x < array.length) {
          temp.push(array[y][x]);
        }
      }
      if (temp.length > 0) {
        returnArray.push(temp);
      }
    }
    return returnArray;
  }
}

function nQueen(n) {
  return new Board(n).solveBoard();
}

console.log(nQueen(19));

// function setAQueen(arr, i, j, dia) {
//   arr[i][j] = 2;
//   dia = dia.map((d) => d.find((r) => r.includes(` ${i} ${j} `)).split(":"));
//   dia
//     .reduce((a, v) => (Array.isArray(v) ? [...a, ...v] : [...a, v]), [])
//     .forEach((p) => {
//       if (arr[p[0]][p[2]] === 0) {
//         arr[p[0]][p[2]] = 1;
//       }
//     });
//   for (let g = 0; g < arr.length; g++) {
//     if (arr[i][g] === 0) arr[i][g] = 1;
//     if (arr[g][j] === 0) arr[g][j] = 1;
//   }
// }

// function diagonal(n, bottomToTop) {
//   let array = Array.from({ length: n }, (_, i) =>
//     Array.from({ length: n }, (_, ind) => ` ${i} ${ind} `)
//   );
//   var temp,
//     returnArray = [];
//   for (var k = 0; k <= 2 * (array.length - 1); ++k) {
//     temp = [];
//     for (var y = array.length - 1; y >= 0; --y) {
//       var x = k - (bottomToTop ? array.length - 1 - y : y);
//       if (x >= 0 && x < array.length) {
//         temp.push(array[y][x]);
//       }
//     }
//     if (temp.length > 0) {
//       returnArray.push(temp.join(":"));
//     }
//   }
//   return returnArray;
// }
