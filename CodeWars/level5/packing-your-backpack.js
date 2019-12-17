function packBagpack(scores, weights, capacity) {
    return scores.map((x,i) => {return {avg: x/weights[i], scores: scores[i], weights: weights[i] }})
    .sort((a,b)=>  b.avg - a.avg ).reduce((a,v) =>
      capacity - v.weights >= 0 ? (capacity -= v.weights, a+=v.scores, a) : a
      , 0);
}