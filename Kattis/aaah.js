const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lines = [];

rl.on('line', (line) => {
  lines.push(line);
  if(lines.length === 2) {
    lines[0] > lines[1] ? console.log('no') : console.log('go')
    lines = [];
  }
});
rl.close({
  
})