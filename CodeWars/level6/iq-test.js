function iqTest(numbers){
    let i = numbers.split(' ').reduce((a,v,i)=>v%2?(a.o.push(i+1),a):(a.e.push(i+1), a), {o: [], e: []});
    return i.o.length > 1 ? i.e[0] : i.o[0]
  }