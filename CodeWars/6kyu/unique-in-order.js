var uniqueInOrder = function(iterable) {
  if (Array.isArray(iterable) === false) {
    iterable = iterable.split("");
  }
  return iterable.filter((element, index) => element != iterable[index + 1]);
};
