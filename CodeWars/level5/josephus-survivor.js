function josephusSurvivor(n,k){
  n = [...Array(n).keys()].map(x=>++x);
  for(let i = k-1; n.length > 1; i+=k-1) {
    n.splice(i = i % n.length,1);
  }
  return n[0];
}

/*
function josephusSurvivor(n, k){
  return n < 1 ? 1 : (josephusSurvivor(n - 1, k) + --k) % n + 1;
}
*/