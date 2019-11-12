function tribonacci(signature,n){
    //your code here
    while(signature.length > 3) {
      signature.push(signature.slice(-3).reduce((a,v)=>a+v));
      i--;
    }
    return signature.slice(0,n)
  }