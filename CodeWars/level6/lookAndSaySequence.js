function lookAndSaySequence(firstElement, n){
    let result = firstElement;
  //  
    while(n > 1) {
      result = [...result].reduce((acc,val,ind,arr) => {
        if(val != arr[ind-1]) {
          let num = arr.findIndex((x, i) => i >= ind && arr[i+1] != x) - ind + 1;
          return acc+=num+val
        }
        else {
          return acc;
        }
      }, '');
      n--;
    }  
    return result
  }
// function lookAndSaySequence(s, n){
//     while(--n) {
//       s=s.replace(/(.)\1*/g,(m)=>m.length+m[0])
//     }
//     return s;
// }