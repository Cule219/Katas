/**
 * The while loop represents the game.
 * Each iteration represents a turn of the game
 * where you are given inputs (the heights of the mountains)
 * and where you have to print an output (the index of the mountain to fire on)
 * The inputs you are given are automatically updated according to your last actions.
 **/


// game loop
while (true) {
    for (let i = 0; i < 8; i++) {
        let heights = [];
        for(let i = 0; i < 8; i++) {
            const mountainH = parseInt(readline()); // represents the height of one mountain.
            heights.push(mountainH);
        }
        console.log(heights.reduce((a,v,i)=>v>a[0]?(a[0]=v,a[1]=i,a):a, [0,0])[1]);     // The index of the mountain to fire on.
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


}