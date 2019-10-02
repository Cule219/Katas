function sudoku2(grid) {
    const first = grid.every((e,i) => {
        let col = grid[i].map((x,j)=>grid[j][i]).filter(x=>Number(x));
        let row = e.filter(x=>Number(x));
        return col.every(x=>col.indexOf(x) === col.lastIndexOf(x)) && row.every(x=>row.indexOf(x) === row.lastIndexOf(x)) 
    })
    let rGrid = [];
    for(let i=0; i<3; i++) {
      let iGrid = grid.splice(0, 3);
      for(let j=0; j<3; j++){
        rGrid.push(iGrid[0].splice(0,3).concat(iGrid[1].splice(0,3)).concat(iGrid[2].splice(0,3)).filter(x=>Number(x)))
      }
    }
    const second = rGrid.every(x=> x.every(el=>x.indexOf(el) === x.lastIndexOf(el)));
    return first && second;
}