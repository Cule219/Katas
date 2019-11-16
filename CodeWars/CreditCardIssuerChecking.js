function getIssuer(number) {
  // Code your solution here
  number += "";
  if ((number.startsWith(34) || number.startsWith(37)) && number.length === 15)
    return "AMEX";
  else if (number.startsWith(6011) && number.length == 16) return "Discover";
  else if (number.match(/^5[1-5]/) && number.length == 16) return "Mastercard";
  else if (
    number.startsWith(4) &&
    (number.length === 13 || number.length === 16)
  )
    return "VISA";
  else return "Unknown";
}
