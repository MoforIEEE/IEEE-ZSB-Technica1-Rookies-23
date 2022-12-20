let btlWater1 = {
  remVolume: 3,
  capacity: 6,
};
let btlWater2 = {
  remVolume: 5,
  capacity: 6,
};
let arr = [btlWater1, btlWater2];
function canMeasureWater(btlWater1, btlWater2, target) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].remVolume < arr[i].capacity) {
      sum += arr[i].remVolume;
    }
  }
  if (sum === target) {
    return true;
  } else {
    let newBottle = {
      remVolume: 0,
      capacity: 6,
    };
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].remVolume < arr[i].capacity) {
        sum += arr[i].remVolume;
      }
    }
    newBottle.remVolume = sum;
    if (newBottle.remVolume === target) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(canMeasureWater(btlWater1, btlWater2, 6));
