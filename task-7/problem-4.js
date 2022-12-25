function secondLowestGrade(arr) {

    let sortedArr = arr.sort((a, b) => a[1] - b[1]);
    let secondLowest = sortedArr[1][1];
    let secondLowestArr = sortedArr.filter((item) => item[1] === secondLowest);
    let secondLowestNames = secondLowestArr.map((item) => item[0]);

    return secondLowestNames;
}
