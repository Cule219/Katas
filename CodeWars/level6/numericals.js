function numericals(s){
    //   return [...s].map((x, i) => 
    //   s.substring(0, i+1).match(new RegExp(`[${x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}]`, `g`)).length
    //   ).join('');
      let obj = {};
      let res = '';
      for(let i = 0; i < s.length; i++) {
        obj[s[i]] = (obj[s[i]] || 0) + 1;
        res += obj[s[i]];
      }
      return res;

    //   str.replace(/./g, char => 
    //     obj[char] = (obj[char] || 0) + 1)
}