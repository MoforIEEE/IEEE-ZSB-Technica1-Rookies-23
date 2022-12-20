function groupAnagrams(arr) {
  var anagrams = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var sortedWord = word.split("").sort().join("");
    if (anagrams[sortedWord]) {
      anagrams[sortedWord].push(word);
    } else {
      anagrams[sortedWord] = [word];
    }
  }
  return anagrams;
}
myJson = JSON.stringify(
  groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
console.log(myJson);
