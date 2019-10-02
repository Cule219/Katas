const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let lines = [];

rl.on('line', line => {
    lines.push(line.split(' '));
    if(lines.length === 5) {
        lines = lines.map(line => {
            line = sortLine(line);
            return sortLine(line);
        });
        console.log(lines)
    }
});

let sortLine = line => {
    let zeroes = [];
    line = line.reduce((acc, val) => val == 0 ? (zeroes.push(val), acc) : (acc.push(val), acc), []).concat(zeroes);
    line.forEach((e, i) => {
    if(line[i+1] == e) {
        line[i] *= 2;
        line[i+1] = 0;
    }
    });
    return line;
}
sortLine([ 2048, 0, '64', '0' ])

