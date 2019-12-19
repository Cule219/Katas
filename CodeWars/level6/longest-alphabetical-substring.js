function longest(str) {
    return [...str].reduce((a,v,i) => i > 0 && v >= str[i-1] ? 
    (a[a.length-1] += v, a) : (a.push(v),a), [])
    .reduce((a,v) => a.length < v.length ? 
    (a = v, a) : a, '');
  }