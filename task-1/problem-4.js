let number = Number(prompt("enter a number"));
function getSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
alert(`your sum is ${getSum(number)}`);
