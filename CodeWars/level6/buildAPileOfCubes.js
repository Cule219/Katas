function findNb(m, n = 1) {
    // your code
    return m < 0 ? -1 : ( m === n**3 ? n : findNb(m-n**3, n+1))
}