function nQueen(n) {
  const board = (this.board = Array.from({ length: n }, () =>
    new Array(n).fill(0)
  ));
  return solveNQueen(board, 0, n) ? board.map((r) => r.indexOf(1)) : [];
}

function solveNQueen(board, col, n) {
  if (col >= n) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (setQueen(board, i, col, n)) {
      board[i][col] = 1;
      if (solveNQueen(board, col + 1, n) === true) {
        return true;
      }
    }
    board[i][col] = 0;
  }
  return false;
}

function setQueen(board, row, col, n) {
  for (let i = 0; i < col; i++)
    if (board[row][i] === 1) {
      return false;
    }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
    if (board[i][j] === 1) return false;
  for (let i = row, j = col; i < n && j >= 0; i++, j--)
    if (board[i][j] === 1) return false;
  return true;
}

console.log("this", nQueen(50));
