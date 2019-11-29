function convertFrac(lst){
    //Your code here
    let array = Array.from(Array(100000).keys(), (y=>y*Math.min(...lst.map(x=>x[1])))).slice(1);
    lst.forEach(e => array = array.filter(x=>x%e[1]===0));
    const common = Math.min(...array);
    return lst.map(x=>`(${x[0]*common/x[1]},${common})`).join('');
}