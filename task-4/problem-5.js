// N -> size of matrix
// a -> matrix
function rotate90Clockwise(a) {
  for (i = 0; i < parseInt(N / 2); i++) {
    for (j = i; j < N - i - 1; j++) {
      var temp = a[i][j];
      a[i][j] = a[N - 1 - j][i];
      a[N - 1 - j][i] = a[N - 1 - i][N - 1 - j];
      a[N - 1 - i][N - 1 - j] = a[j][N - 1 - i];
      a[j][N - 1 - i] = temp;
    }
  }
}

function printMatrix(arr) {
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) document.write(arr[i][j] + " ");
    document.write("<br/>");
  }
}

var N = 4;
var arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
rotate90Clockwise(arr);
printMatrix(arr);
