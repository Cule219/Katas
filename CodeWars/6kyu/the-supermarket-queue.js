function queueTime(customers, n) {
    return Math.max(...customers.reduce((a,v) => (a[a.indexOf(Math.min(...a))] += v, a), new Array(n).fill(0)))
  }