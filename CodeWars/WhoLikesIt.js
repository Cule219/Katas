function likes(names) {
  let value = names.length;
  if (value === 0) {
    return "no one likes this";
  } else if (value === 1) {
    return names[0] + " likes this";
  } else if (value === 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (value === 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return (
      names[0] + ", " + names[1] + " and " + (value - 2) + " others like this"
    );
  }
}
