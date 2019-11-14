function mostMoney(students) {
    let highest = Math.max(...students.map(s => s.fives*5+s.tens*10+s.twenties*20));
    let richest = students.filter(s => s.fives*5+s.tens*10+s.twenties*20 === highest);
    return richest.length > 1 ? 'all' : richest[0].name;
  }