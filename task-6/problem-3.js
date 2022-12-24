function climbingLeaderboard(scores, alice) {
    let uniqueScores = [...new Set(scores)];
    let result = [];
    let index = uniqueScores.length - 1;
    for (let i = 0; i < alice.length; i++) {
        while (alice[i] >= uniqueScores[index] && index >= 0) {
            index--;
        }
        result.push(index + 2);
    }
    return result;
}





























