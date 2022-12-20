function pageCount(n, p) {
  let count = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === p) {
      count++;
    }
  }
  return count;
}
console.log(pageCount(6, 2));