// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/solutions/javascript

function waveSort(arr) {
  // your code here
  arr.sort((a, b) => b - a);
  let arrA = arr.slice(0, Math.ceil(arr.length / 2));
  let arrB = arr.slice(Math.ceil(arr.length / 2));
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) arr[i] = arrA[i / 2];
    else arr[i] = arrB[(i - 1) / 2];
  }
}
