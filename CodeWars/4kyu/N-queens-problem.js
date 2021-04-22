// Legacy Backtracking - waist of time

// class GFG {
//   constructor(n) {
//     this.N = n;
//     this.ld = [];
//     this.rd = [];
//     this.cl = [];
//   }

//   solveNQueen = (board, col) => {
//     if (col >= this.N) return true;
//     for (let i = 0; i < this.N; i++) {
//       if (
//         this.ld[i - col + this.N - 1] != 1 &&
//         this.rd[i + col] != 1 &&
//         this.cl[i] != 1
//       ) {
//         board[i][col] = 1;
//         this.ld[i - col + this.N - 1] = 1;
//         this.rd[i + col] = 1;
//         this.cl[i] = 1;

//         if (this.solveNQueen(board, col + 1)) return true;

//         board[i][col] = 0; // BACKTRACK
//         this.ld[i - col + this.N - 1] = 0;
//         this.rd[i + col] = 0;
//         this.cl[i] = 0;
//       }
//     }
//     return false;
//   };
//   nQueen = () => {
//     const board = (this.board = Array.from({ length: this.N }, () =>
//       new Array(this.N).fill(0)
//     ));
//     return this.solveNQueen(board, 0) ? board.map((r) => r.indexOf(1)) : [];
//   };
// }
// console.log("this", new GFG(55).nQueen());

// Wiki is your lord and savior
// https://en.wikipedia.org/wiki/Eight_queens_puzzle#Existence_of_solutions

const nQueen = (n) => {
  const even = [],
    odd = [];
  for (let i = 0; i < n; i++) {
    i % 2 ? odd.push(i) : even.push(i);
  }
  if (n === 2 || n === 3) return [];
  if (n % 6 === 2) {
    even.splice(0, 3, 2, 0);
    even.push(4);
  } else if (n % 6 === 3) {
    even.push(...even.splice(0, 2));
    odd.push(odd.shift());
  }
  return odd.concat(even);
};
