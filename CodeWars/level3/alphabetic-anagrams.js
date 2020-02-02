
function listPosition(word) {
    //Return the anagram list position of the word
    let sorted = word.split('').sort();
    word = word.split('');
    let total = 1;
    let i = 0
    while(sorted.length) {
      let count = posiblePermutations(sorted.length);
      let freq = frequency(sorted);
      let index = sorted.indexOf(word[i]);
      total += (count/freq) * index;
      sorted.splice(index, 1);
      i++;
    }
    return total;
  }
  
  let posiblePermutations = (length) => [...Array(length).keys()].reduce((a,v)=>a*(v || 1), 1);
  
  let frequency = (word) => word.reduce((a,v) => {
      a.includes(v) ? a[a.indexOf(v)+1]++ : (a.push(v), a.push(1));
      return a;
    }, [])
    .reduce((a,v) => v > 1 ? (a*=posiblePermutations(v+1),a) : a, 1);