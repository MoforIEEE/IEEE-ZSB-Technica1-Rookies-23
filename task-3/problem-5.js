function flatlandSpaceStations(n, c) {
  const cities = Array(n).fill(0);
  for (const station of c) {
    cities.forEach(() => (cities[station] = 1));
  }
  let nearestStation = [];
  for (const city in cities) {
    if (cities[city] === 1) nearestStation.push(0);
    else {
      let leftStation = Infinity;
      for (let l = Number(city) - 1; l >= 0; l--) {
        if (cities[l] === 1) {
          leftStation = Number(city) - l;
          break;
        }
      }
      let rightStation = Infinity;
      for (let r = Number(city) + 1; r < cities.length; r++) {
        if (cities[r] === 1) {
          rightStation = r - Number(city);
          break;
        }
      }
      nearestStation.push(Math.min(leftStation, rightStation));
    }
  }
  return Math.max(...nearestStation);
}
console.log(flatlandSpaceStations(5, [0, 4]));


