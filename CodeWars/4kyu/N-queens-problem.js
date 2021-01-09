class GFG {
  constructor(n) {
    this.N = n;
    this.ld = [];
    this.rd = [];
    this.cl = [];
  }

  solveNQueen = (board, col) => {
    if (col >= this.N) return true;
    for (let i = 0; i < this.N; i++) {
      if (
        this.ld[i - col + this.N - 1] != 1 &&
        this.rd[i + col] != 1 &&
        this.cl[i] != 1
      ) {
        board[i][col] = 1;
        this.ld[i - col + this.N - 1] = 1;
        this.rd[i + col] = 1;
        this.cl[i] = 1;

        if (this.solveNQueen(board, col + 1)) return true;

        board[i][col] = 0; // BACKTRACK
        this.ld[i - col + this.N - 1] = 0;
        this.rd[i + col] = 0;
        this.cl[i] = 0;
      }
    }
    return false;
  };
  nQueen = () => {
    const board = (this.board = Array.from({ length: this.N }, () =>
      new Array(this.N).fill(0)
    ));
    return this.solveNQueen(board, 0) ? board.map((r) => r.indexOf(1)) : [];
  };
}
console.log("this", new GFG(55).nQueen());
