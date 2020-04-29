// Return the output array, and ignore all non-op characters
function parse( data, num = 0 )
{
  return data.split('').reduce((a,v) => {
    switch(v) {
      case 'i':
        num++;
        break;
      case 'd':
        num--;
        break;
      case 's':
        num = num**2;
        break;
      case 'o':
        a.push(num);
        break;
    }
    return a;
  }, []);
}