function kClosest(points, k) {
  let result = [];
  let len = points.length;
  if (len === 0) return result;
  if (len === 1) return points;
  points.sort((a, b) => {
    let x1 = a[0];
    let y1 = a[1];
    let x2 = b[0];
    let y2 = b[1];
    let d1 = Math.sqrt(x1 * x1 + y1 * y1);
    let d2 = Math.sqrt(x2 * x2 + y2 * y2);
    return d1 - d2;
  });
  for (let i = 0; i < k; i++) {
    result.push(points[i]);
  }
  return result;
}
console.log(kClosest([[1, 3], [-2, 2]], 1));
