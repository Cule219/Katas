function numericFormatter(template, str = '1234567890', i = 0){
    //your code here
    return template.replace(/[a-z]/gi, ()=>str[i++ % str.length])
  }