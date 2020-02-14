function step(g, m, n) {
    if(m%2===0) m++;
    while(m<n-g) {
      if(isPrime(m) && isPrime(m+g)) {
        return [m, m+g];
      }
      m+=2;
    }
    return null;
}


function isPrime(n) {
    for(i = 2; i <= Number(Math.sqrt(n)); i++)
        if(n % i === 0) return false;
    return true;
}