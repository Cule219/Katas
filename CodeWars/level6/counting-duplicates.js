function duplicateCount(text){
    return [...text.toLowerCase()].reduce((a,v,i) => (text.indexOf(v) != i && a.indexOf(v) == -1) ? (a.push(v), a) : a, []).length;
}