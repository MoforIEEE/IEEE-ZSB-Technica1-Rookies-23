let num = prompt('Enter a number u wanna be reversed');

function getNumRev(n) {
 return   n.toString().split('').reverse().join('')*Math.sign(n)
}
alert(`ur reversed num is ${getNumRev(num)}`)