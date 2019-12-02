function convertQueryToMap(query) {
    // add your code here
    if(!query) return '';
    let path = {};
    let chars = {'%20': ' ', '%26': '&', '%3D': '=', '%3F': '?'}
    query.split('&').forEach(x=>{
      let above = path;
      const pair = x.split('=');
      pair[0].split('.').forEach((x,i,a)=>{
          if(i === a.length-1) {
          above[x] = pair[1].replace(/%20|%26|%3D|%3F/g, m => chars[m]);
          } 
          else {
            if(!above[x])
              above[x] = {};
            above = above[x];
          }
      });
    });
    return path;
  }