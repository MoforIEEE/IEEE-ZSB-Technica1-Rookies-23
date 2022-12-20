let num = prompt("guess a number from 100 to 999");
let userNum = Array.from(num, Number);

function guess() {
  const arrLength = 3;
  let rdNum = Array.from(Array(arrLength)).map((x) =>
    Math.round(Math.random() * (10 - 1) + 1)
  );

  for (let i = 0; i <=rdNum.length; i++) {
    
    if (
      userNum[0] === rdNum[0] ||
      userNum[1] === rdNum[1] ||
      userNum[2] === rdNum[2]
    ) {
        console.log('1hit')
    }
    else{
        console.log('1miss')
    }
  }
}
