let store = []

function nQueen(n) {
  // generate grid n*n
  let arr = Array.from({length: n}, (_) => new Array(n).fill(0))
  // generate grids for taking diagonals when placing a queen
  let diagonals = [diagonal(n), diagonal(n, 1)];
  // set first queen and block spaces in grid
  // takes in grid, starting x, y, diagonals array
  setAQueen(arr, ~~(n/2), 0, diagonals);
  console.log(arr)
  store.push([arr, ~~(n/2),0]);
  // iter
  for(let i = 0; i < n; i++) {
    let queenSet = false;
    for(let j=0; j < n; j++) {
      if(arr[i][j] === 0) {
        setAQueen(arr, i, j, diagonals);
        console.log(arr, i, j)
        store.push([arr,i,j]);
        queenSet = true;
      }
    }
    if(queenSet === false) {
      // we want to reiterate, 
      // set i, j to 3(not suitable for queen)
      // reiterate last queen if there are any zeroes in grid
      // if not -i again and repeat
      // i-=2;
      console.log('not set')
      arr[i][j] = 3;
      if(arr.flat().indexOf(0))
    }
}
  console.log(arr)
  arr = arr.map(x => x.indexOf(2));
  if(arr.filter(x => x !== -1).length !== n)
    arr = [];
  return arr;
}

function setAQueen(arr, i, j, dia) {
  arr[i][j] = 2;
  dia = dia.map(d => d.find(r => r.includes(`${i} ${j}`)).split(':'));
  dia.reduce((a,v) => Array.isArray(v) ? [...a,...v]: [...a,v], []).forEach(p => {
    if(arr[p[0]][p[2]] === 0) {
      arr[p[0]][p[2]] = 1;
    }
  })
  for(let g=0; g < arr.length; g++) {
    if(arr[i][g] === 0)
      arr[i][g] = 1;
    if(arr[g][j] === 0)
      arr[g][j] = 1;
  }
}

function diagonal(n, bottomToTop) {
   let array = Array.from({length: n}, (_, i) => 
    Array.from({length: n}, (_, ind) => `${i} ${ind}`))
    var temp, returnArray = [];
    for (var k = 0; k <= 2 * (array.length - 1); ++k) {
        temp = [];
        for (var y = array.length - 1; y >= 0; --y) {
            var x = k - (bottomToTop ? array.length - 1 - y : y);
            if (x >= 0 && x < array.length) {
                temp.push(array[y][x]);
            }
        }
        if(temp.length > 0) {
            returnArray.push(temp.join(':'));
        }
    }
    return returnArray;
}

console.log(nQueen(6));


[ 
[ 1, 2, 1, 1 ], 
[ 1, 1, 1, 2 ], 
[ 2, 1, 1, 1 ], 
[ 1, 1, 2, 1 ] 
]
