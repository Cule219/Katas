//www.codewars.com/kata/59e61c577905df540000016b/

https: function hungrySeven(arr) {
  return ~arr.join("").indexOf("789")
    ? hungrySeven(arr.join("").replace("789", "897").split(""))
    : arr.map((n) => +n);
}
