let num = prompt("Enter a number:");
let i = 2;
let count = num;

while (num > 1) {
  if (num % i == 0) {
    console.log(i);
    num = num / i;
    count++;
  } else {
    i++;
  }
}
