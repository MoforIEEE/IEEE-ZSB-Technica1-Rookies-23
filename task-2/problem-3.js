function issubsequence(s1, s2) {
  let n = s1.length,
    m = s2.length;
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (s1[i] == s2[j]) i++;
    j++;
  }

  return i == n;
}

let str1 = prompt("first word");
let str2 = prompt("second word");
if (issubsequence(str1, str2)) alert(`${str1} is subsequence of ${str2}`);
else alert(`${str1} is not a subsequence of ${str1}`);
