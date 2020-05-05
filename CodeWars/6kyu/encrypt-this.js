// https://www.codewars.com/kata/5848565e273af816fb000449/solutions/javascript

// const encryptThis=a=>a.split` `.map(a=>a.replace(/(^.)(.)(.*)(.$)/,'$1$4$3$2').replace(/^./,a=>a.charCodeAt())).join` `

const encryptThis=s=>s.split(' ').reduce((a,v)=>{
    let s = [...v];
    if(s.length > 2) {
      [s[1],s[s.length-1]]=[s[s.length-1],s[1]];
    }
    a.push(v.charCodeAt(0)+s.join('').slice(1));
    return a
  },[]).join(' '); 