let num, numFact;
num = Number(prompt("enter a positive number & Check ur console"));
numFact = 1;
if (num == 0 || num == 1) {
  console.log(numFact);
} else {
  for (let i = num; i >= 1; i--) {
    numFact = numFact * i;
    console.log(numFact);
  }
}
