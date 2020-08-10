//www.codewars.com/kata/514a024011ea4fb54200004b
https: function domainName(url) {
  if (url.match(/(?<=www\.).*/g)) url = url.match(/(?<=www\.).*/g)[0];
  else if (url.match(/(?<=(:\/\/)).*.*/g))
    url = url.match(/(?<=(:\/\/)).*.*/g)[0];
  return url.match(/.*?(?=\.)/)[0];
}
