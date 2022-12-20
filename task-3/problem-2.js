let students = [
  ["Harry", 37.21],
  ["Berry", 37.21],
  ["Tina", 37.2],
  ["Akriti", 41],
  ["Harsh", 39],
];

//store name and score in a nested list
let scores = [];
for (let i = 0; i < students.length; i++) {
  scores.push(students[i][1]);
}
//sort scores
scores.sort();
//find the second lowest score
let secondLowest = scores[0];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > secondLowest) {
    secondLowest = scores[i];
    break;
  }
}
//find the names of the students with the second lowest score
let names = [];
for (let i = 0; i < students.length; i++) {
  if (students[i][1] === secondLowest) {
    names.push(students[i][0]);
  }
}
//sort names alphabetically
names.sort();
//print names
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
