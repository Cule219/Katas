function backwardsPrime(start, stop) {
  console.log(start, stop);
    let revPrimes = [];
    if(start%2===0) start++;
    for(let i = start; i <= stop; i+=2) {
      let rev = parseInt(i.toString().split('').reverse().join(''));
      if(isPrime(i) && isPrime(rev) && i !== rev) {
          revPrimes.push(i);
      }
    }
    return revPrimes;
  }
  
  function isPrime(n) {
      for(i = 2; i <= Number(Math.sqrt(n)); i++)
          if(n % i === 0)
            return false;
      return true;
  }