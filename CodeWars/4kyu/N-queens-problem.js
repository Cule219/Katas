class Square {
  constructor(fields) {
    this.queenClaims = [];
    this.queenSet = false;
    this.fields = fields;
  }
  setAQueen = (row, board) => {
    // set a queen in this square
    // every field that's associated with the field gets added queens value
    this.queenSet = row;
    this.fields.forEach((pair) =>
      board[pair[0]][pair[1]].queenClaims.push(row)
    );
  };
  removeAQueen = (board) => {
    this.fields.forEach(
      (ij) =>
        (board[ij[0]][ij[1]].queenClaims = board[ij[0]][
          ij[1]
        ].queenClaims.filter((n) => n !== this.queenSet))
    );
    this.queenSet = false;
  };
  isFree = () => {
    return !this.queenClaims.length;
  };
}

class Queen {
  constructor(i, board, fixed = false) {
    this.row = i;
    this.j = null;
    // store only j in here; if all available j's are exhausted change the above row's queen;
    this.history = [];
    // need this later on
    this.fixed = fixed;
    this.board = board.board;
  }
  setQueen = () => {
    // if the queen has the position set, return it
    if (this.j) {
      return this.j;
    }
    // returns the position in the row or false;
    const pos = this.board[this.row].findIndex(
      (p, i) => p.isFree() && !this.history.includes(i)
    );
    if (~pos) {
      this.j = pos;
      this.board[this.row][pos].setAQueen(this.row, this.board);
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
    this.board[this.row][this.j].removeAQueen(this.board);
    this.j = null;
  };
}

class Board {
  constructor(n, diagonals) {
    this.diagonals = diagonals;
    this.solution = [];
    this.length = n;
  }

  initBoard = (n) => {
    this.board = Array.from({ length: n }, (_, i) =>
      Array.from({ length: n }, (_, j) => {
        const dia = this.diagonals
          .reduce((a, d) => {
            const res = d
              .find((r) => JSON.stringify(r).includes(` ${i} ${j} `))
              .split(":");
            return Array.isArray(res) ? [...a, ...res] : [...a, res];
          }, [])
          .map((pair) =>
            pair
              .trim()
              .split(" ")
              .map((no) => +no)
          );
        const fields = this.getFields(i, j, n, dia);
        return new Square(fields, this);
      })
    );
  };

  intiQueens = (n) => {
    this.queens = Array.from({ length: n }, (_, i) => new Queen(i, this));
  };

  solveBoard = () => {
    // to finish either first queen has no more options or we found the solution
    for (let i = 0; i < this.length; i++) {
      const position = this.queens[i].setQueen(this.board[i]);

      if (position === false || position === undefined) {
        this.queens[i].cleanHistory();
        // remove last set queen
        const queenAbove = this.queens[i - 1];
        i -= 2;
        if (queenAbove) {
          this.solution.pop();
          // reset the board
          queenAbove.markPositionUnusable();
        } else {
          // this is no solution condition
          console.log(i);
          return [];
        }
        continue;
      }
      this.solution.push(position);
      // console.log(this.board.map((row) => row.map((cell) => cell.queenClaims)));
    }
    return this.solution;
  };

  getFields(i, j, n, dia) {
    for (let g = 0; g < n; g++) {
      dia.push([i, g]);
      dia.push([g, j]);
    }
    return dia;
  }
}

function diagonal(n, bottomToTop) {
  let array = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, ind) => ` ${i} ${ind} `)
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
      returnArray.push(temp.join(":"));
    }
  }
  return returnArray;
}
function nQueen(n) {
  const diagonals = [diagonal(n), diagonal(n, 1)];
  const board = new Board(n, diagonals);
  board.initBoard(n);
  board.intiQueens(n);
  return board.solveBoard();
}

console.log(nQueen(4));
