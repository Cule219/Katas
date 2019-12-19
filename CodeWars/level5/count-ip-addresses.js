function ipsBetween(start, end){
    //TODO
    end   = end.split('.');
    return start.split('.').map((x, i) => end[i]-x).reduce((acc,val,ind)=>acc+=val*256**(3-ind),0);
  }