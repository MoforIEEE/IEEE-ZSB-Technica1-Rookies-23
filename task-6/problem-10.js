function deleteFriends(n, k, arr) {
  let i = 0;
  while (k > 0 && i < n) {
    if (arr[i] < arr[i + 1]) {
      arr.splice(i, 1);
      k--;
    }
    i++;
  }
  if (k > 0) {
    arr.splice(n - k, k);
  }
  return arr;
}
