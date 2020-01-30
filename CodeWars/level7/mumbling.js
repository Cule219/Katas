function accum(s) {
  /*
 let characters = s.toLowerCase().split('');
 for(let i = 0; i < characters.length; i++) {
   characters[i] = characters[i].toUpperCase() + characters[i].repeat(i);  }
 return characters.join('-');
 */
  return s
    .toLowerCase()
    .split("")
    .map((character, index) => {
      return character.toUpperCase() + character.repeat(index);
    })
    .join("-");
}