function catMouse(x, j) {
  const cat = x.indexOf('C');
  const mouse = x.indexOf('m');
  if (cat === -1 || x.indexOf('D') === -1 || mouse === -1) return 'boring without all three';
  const space = x.substring(cat, mouse);
  if (space.length > j) return 'Escaped!';
  if (space.indexOf('D') !== -1) return 'Protected!';
  return 'Caught!';
}
