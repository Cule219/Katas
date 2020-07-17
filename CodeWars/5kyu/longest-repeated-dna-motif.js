// https://www.codewars.com/kata/5713a7ff8807941cf7000a13
function longestMotif(seq) {
  // your code here
  let lengthiest = [""];
  for (let i = 0; i < seq.length; i++) {
    let seqPart = seq[i];
    let j = i + 1;
    while (seq.slice(i + seqPart.length).includes(seqPart)) {
      if (seqPart.length > lengthiest[0].length) {
        lengthiest = [seqPart];
      } else if (
        seqPart.length === lengthiest[0].length &&
        !lengthiest.includes(seqPart)
      ) {
        lengthiest.push(seqPart);
      }
      seqPart += seq[j];
      j++;
    }
  }
  return lengthiest;
}
