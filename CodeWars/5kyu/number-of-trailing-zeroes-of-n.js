function zeros (n, p=0, d=5) {
    return n/d >= 1 ? zeros(n, p+=Math.floor(n/d), d*=5) : p;
  }