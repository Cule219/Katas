function tribonacci(signature,n){
    //your code here
    while(signature.length < n) {
      signature.push(signature.slice(-3).reduce((a,v)=>a+v));
    }
    return signature.slice(0,n)
  }