function firstDup (s) {
    // your solution here
    return s.split('').filter((_,i) => i !== s.lastIndexOf(_))[0];
}