// 1. create a function that takes a number as an argument
// 2. convert the number to a string
// 3. split the string into an array of strings
// 4. convert the array of strings into an array of numbers
// 5. sort the array of numbers in ascending order
// 6. convert the array of numbers into a string
// 7. convert the string into a number
// 8. repeat steps 3-7 for the descending order
// 9. subtract the smaller number from the bigger number
// 10. repeat steps 3-9 until the result is 6174

function kaprekar(num) {
  var numStr = num.toString();
  var numArr = numStr.split("");
  var numArrNum = numArr.map(Number);
  var numArrNumAsc = numArrNum.sort(function (a, b) {
    return a - b;
  });
  var numArrNumAscStr = numArrNumAsc.join("");
  var numArrNumAscNum = parseInt(numArrNumAscStr);
  var numArrNumDesc = numArrNum.sort(function (a, b) {
    return b - a;
  });
  var numArrNumDescStr = numArrNumDesc.join("");
  var numArrNumDescNum = parseInt(numArrNumDescStr);
  var result = numArrNumDescNum - numArrNumAscNum;
  console.log(result);
  if (result === 6174) {
    return;
  } else {
    kaprekar(result);
  }
}

kaprekar(2111);
