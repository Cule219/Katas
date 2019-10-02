const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', line => {
    let days = 1;
    passed = 1;
    while(passed < line) {
        passed = 2**days;
        days++;
    }
    console.log(days);
});
