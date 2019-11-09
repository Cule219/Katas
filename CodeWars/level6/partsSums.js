function partsSums(ls) {
    return ls.reverse().reduce((a,v,i)=>(a.push(v+a[i]),a),[0]).reverse();
}