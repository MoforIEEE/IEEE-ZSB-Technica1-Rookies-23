function mostFrequentNumber(arr, N) {
  let mp = new Map();

  for (let i = 0; i < N; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  let maxCount = 0;
  let res = -1;
  for (let i = 0; i < N; i++) {
    if (maxCount < mp.get(arr[i])) {
      res = arr[i];
      maxCount = mp.get(arr[i]);
    }
  }

  return res;
}

console.log(mostFrequentNumber([1,1,1,2,2,3], 6 ));
