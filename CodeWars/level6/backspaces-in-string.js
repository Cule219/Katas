function cleanString(s) {
    return [...s].reduce((a,v) => v==='#'? 
    (a.pop(),a):(a.push(v),a)
    ,[]).join('');
};