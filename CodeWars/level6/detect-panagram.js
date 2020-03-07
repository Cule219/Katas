function isPangram(string){
    return [...'abcdefghijklmnopqrstuvwxyz'].every(c => string.toLowerCase().includes(c));
  }