function christmasTree(height) {
  //   return Array.from(Array(height).keys()).map((_,i)=> 1 + i*2).reverse().map((x,i) =>
  //     ' '.repeat(i) + '*'.repeat(x) + ' '.repeat(i)
  //   ).reverse().join('\n');
  return Array.from(Array(height).keys(), (_, i) => ' '.repeat(height - 1 - i) + '*'.repeat(i * 2 + 1) + ' '.repeat(height - 1 - i)).join('\n');
}
