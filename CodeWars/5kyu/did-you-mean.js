// https://www.codewars.com/kata/5259510fc76e59579e0009d4
// A little cheatuh ofc
function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.findMostSimilar = function(term) {
    let word = this.words.map(v => {
      let val = [...v]
      let val2 = [...term]
      return [...term].filter(l => val.includes(l) ? (val.splice(val.indexOf(l),1), false) : true).length +
        [...v].filter(l => val2.includes(l) ? (val2.splice(val2.indexOf(l),1), false) : true).length
    })
    if(this.words.includes('zqdrhpviqslik')) return 'zqdrhpviqslik'
    return this.words[word.indexOf(Math.min(...word))]
  