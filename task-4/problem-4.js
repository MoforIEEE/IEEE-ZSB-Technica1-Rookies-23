function increment(arr) {
  let carry = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] += carry;
    if (arr[i] > 9) {
      arr[i] = 0;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry === 1) {
    arr.unshift(1);
  }
  return arr;
}

console.log(increment([1, 2, 3, 4]));
