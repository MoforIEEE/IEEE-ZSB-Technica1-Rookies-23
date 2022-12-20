function palindrome(str) {
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    alert("Yes");
  } else {
    alert("No");
  }
}
let input = prompt("enter your str");
palindrome(input);
