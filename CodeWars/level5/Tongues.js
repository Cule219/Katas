function tongues(code) {
    let c = 'bkxznhdcwgpvjqtsrlmf';
    let v = 'aiyeou';
    return [...code].map(l => {
      l.toUpperCase() === l ?
        (c=c.toUpperCase(),
        v=v.toUpperCase())
      :
        (c=c.toLowerCase(),
        v=v.toLowerCase())
      let bla = c.indexOf(l) !== -1 || v.indexOf(l) !== -1
      ?
      (
        c.indexOf(l) !== -1 ? 
        (c.indexOf(l) - 10 < 0 ? c[c.indexOf(l) + 10] : c[c.indexOf(l) - 10])
        :
        (v.indexOf(l) -  3 < 0 ? v[v.indexOf(l) +  3] : v[v.indexOf(l) - 3])
      )
      :
      l
      console.log(l, bla)
      return bla
    }).join('')
  }