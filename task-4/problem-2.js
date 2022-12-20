let s1 = prompt("Enter string1");
let s2 = prompt("Enter string2");

function containsPermutation(s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }
  let map = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (map.has(s1[i])) {
      map.set(s1[i], map.get(s1[i]) + 1);
    } else {
      map.set(s1[i], 1);
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (map.has(s2[i])) {
      if (map.get(s2[i]) == 1) {
        map.delete(s2[i]);
      } else {
        map.set(s2[i], map.get(s2[i]) - 1);
      }
    }

    if (map.size == 0) {
      return true;
    }
  }
  return false;
}

console.log(containsPermutation(s1, s2));
