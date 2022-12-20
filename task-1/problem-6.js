let numA = prompt('enter your first number')
let numB = prompt('enter your second number')

function gcd(a, b) {
  if (a < b) {
    var temp = a;
    a = b;
    b = temp;
  }
  while (b != 0) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
alert(`your GCD is ${gcd(numA,numB)}`)
