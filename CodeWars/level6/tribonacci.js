function tribonacci(signature,n){
    //your code here
    let i = n;
    while(i > 3) {
      signature.push(signature.slice(-3).reduce((a,v)=>a+v));
      i--;
    }
    return signature.slice(0,n)
  }