function acmTeam(topics) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < topics.length; i++) {
    for (let j = i + 1; j < topics.length; j++) {
      let temp = topics[i] | topics[j];
      let count1 = temp.toString(2).split("1").length - 1;
      if (count1 > max) {
        max = count1;
        count = 1;
      } else if (count1 === max) {
        count++;
      }
    }
  }
  return [max, count];
}
