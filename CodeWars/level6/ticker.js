const ticker = (text, width, tick) => {
  text = ' '.repeat(width) + text;
  tick %= text.length;
  return text.substring(tick, width + tick) + text.substring(0, width + tick - text.length);
};
