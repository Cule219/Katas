const splitAndAdd = (arr, n) =>
  arr.length === 1 || n < 1
    ? arr
    : splitAndAdd(
        ((arr = arr.length % 2 === 1 ? [0, ...arr] : arr),
        arr.splice(arr.length / 2).reduce((a, v, i) => ((a[i] += v), a), arr)),
        --n
      );
