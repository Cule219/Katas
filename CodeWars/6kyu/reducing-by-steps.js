function gcdi(a, b) {
    for (i = Math.min(Math.abs(a), Math.abs(b)); i > 0; i--) {
        if (a % i === 0 && b % i === 0)
            return i;
    }
}
function lcmu(a, b) {
    let mul = [];
    for (i = 2; i <= Math.abs(a) * Math.abs(b); i++) {
        if (mul.includes(i * Math.abs(a)))
            return i;
        mul.push(i * Math.abs(a));
        if (mul.includes(i * Math.abs(b)))
            return i;
        mul.push(i * Math.abs(b));
    }
}
function som(a, b) {
    return a + b;
}
function maxi(a, b) {
    return Math.max(a, b);
}
function mini(a, b) {
    return Math.min(a, b);
}
function operArray(fct, arr, init) {
    console.log(fct, arr, init);
    return arr.reduce((a, v) => a[0] ? (a.push(fct(a[a.length - 1], v)), a) : (a.push(fct(v, init)), a), [])
}


console.log(operArray(lcmu, [18, 69, -90, -78, 65, 40], 18));