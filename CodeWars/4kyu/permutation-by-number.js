function permutationByNumber(word, n) {
    let newWord = '';
    word = [...word].sort();
    if(n >= count(word.length)/frequency(word)*word.length) return '';
    while(word.length) {
      let c = count(word.length)/frequency(word);//get the factorial
      let index = ~~(n/c);//get the index;
      let firstIndex = word.indexOf(word[index]);//get the first index in arr
      if(index !== firstIndex) {
        index = firstIndex;
      }
      newWord += word.splice(index, 1);
      n = n >= c*index ? n -= c*index : n;
    }
    return newWord
  }
  
  let count = (length) => [...Array(length).keys()].reduce((a,v)=>a*(v || 1), 1);
  let frequency = (word) => word.reduce((a,v) => {
      a.includes(v) ? a[a.indexOf(v)+1]++ : (a.push(v), a.push(1));
      return a;
    }, [])
    .reduce((a,v) => v > 1 ? (a*=count(v+1),a) : a, 1);