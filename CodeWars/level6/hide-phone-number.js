function encryptNum(number) {
    console.log(number);
    let regEx = new RegExp(/^(0039|\+39|1){1}([- .])?(\d{3})\2?(\d{1})(\d{2})\2?(\d{4})$/, 'gi');
    return number.match(regEx) ? number.replace(regEx, '$1$2$3$2$4XX$2XXXX') : false;
  }

  /*
  function encryptNum(number) {
  return /^((\+|00)39([ .]?\d{3}){3}|1([ .-]?\d{3}){3})\d$/.test(number)
  ? number.replace(/(\d\D?){6}$/, x => x.replace(/\d/g, 'X'))
  : false; 
}
*/