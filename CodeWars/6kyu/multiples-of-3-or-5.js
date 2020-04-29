function solution(number){
  if(number < 0) return 0;
  return [...Array(number).keys()].reduce((a,v) => v%3 === 0 || v % 5 === 0 ? a += v : a, 0);
}