function lastStoneWeight(stones) {
  let len = stones.length;
  if (len === 0) return 0;
  if (len === 1) return stones[0];
  stones.sort((a, b) => a - b);
  while (stones.length > 1) {
    let y = stones.pop();
    let x = stones.pop();
    if (x !== y) {
      stones.push(y - x);
      stones.sort((a, b) => a - b);
    }
  }
  return stones.length === 0 ? 0 : stones[0];
}
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
