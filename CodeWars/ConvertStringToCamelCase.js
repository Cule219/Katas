function toCamelCase(str) {
  return str
    .split("")
    .reduce((acc, val, ind) => {
      if (str[ind - 1] === "-" || str[ind - 1] === "_") {
        acc[acc.length - 1] = val.toUpperCase();
      } else {
        acc.push(val);
      }
      return acc;
    }, [])
    .join("");
}
