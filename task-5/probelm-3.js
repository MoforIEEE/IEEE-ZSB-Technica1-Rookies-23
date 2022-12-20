let num = prompt("Enter a number:");
let arr = Array.from(String(num), Number);
function sumOfSquares(num) {
  let arr = Array.from(String(num), Number);
  let sum = arr.reduce((a, b) => a + b ** 2, 0);

  while (sum != 1) {
    arr = Array.from(String(sum), Number);
    sum = arr.reduce((a, b) => a + b ** 2, 0);
  }
  if (sum == 1) {
    return true;
  } else {
    return false;
  }
}

console.log(sumOfSquares(num));
