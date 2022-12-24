const points = [
  [0, 0],
  [1, 1],
  [1, 0],
  [0, 1],
  [2, 2],
  [2, 0],
  [0, 2],
  [3, 3],
  [3, 0],
  [0, 3],
  [4, 4],
  [4, 0],
  [0, 4],
  [5, 5],
  [5, 0],
  [0, 5],
  [6, 6],
  [6, 0],
  [0, 6],
  [7, 7],
  [7, 0],
  [0, 7],
  [8, 8],
  [8, 0],
  [0, 8],
  [9, 9],
  [9, 0],
  [0, 9],
  [10, 10],
  [10, 0],
  [0, 10],
  [11, 11],
  [11, 0],
  [0, 11],
  [12, 12],
  [12, 0],
  [0, 12],
  [13, 13],
  [13, 0],
  [0, 13],
  [14, 14],
  [14, 0],
  [0, 14],
];

// 2. create a function to count the number of ways to choose three points from the data structure such that the three points and the query point form an axis-aligned square with positive area.
const countSquare = (points, query) => {
  let count = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        if (isSquare(points[i], points[j], points[k], query)) {
          count++;
        }
      }
    }
  }
  return count;
};

const isSquare = (p1, p2, p3, query) => {
  if (p1[0] === p2[0] && p1[1] === p3[1] && p2[1] === p3[0]) {
    return true;
  }

  if (p1[0] === p2[0] && p1[1] === p3[1] && p2[1] === p3[0]) {
    return true;
  }

  if (p1[0] === p3[0] && p1[1] === p2[1] && p3[1] === p2[0]) {
    return true;
  }

  if (p1[0] === p3[0] && p1[1] === p2[1] && p3[1] === p2[0]) {
    return true;
  }

  return false;
};

console.log(countSquare(points, [0, 0]));
