var solution = function(firstArray, secondArray) {
    return firstArray.reduce((a,v,i)=>(a+=Math.abs(v-secondArray[i])**2,a), 0)/firstArray.length;
  }