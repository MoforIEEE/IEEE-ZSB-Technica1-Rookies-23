function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i% 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
let number = Number(prompt("enter a number"));
alert(`your sum is ${getSum(number)}`);
