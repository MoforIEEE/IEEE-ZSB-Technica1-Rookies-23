function findMinDistance(arr) {
  let minDistance = arr.length;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        minDistance = Math.min(minDistance, j - i);
      }
    }
  }
  return minDistance;
}

console.log(findMinDistance([2, 5, 3, 4, 5, 2]));
