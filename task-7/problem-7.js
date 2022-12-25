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
  