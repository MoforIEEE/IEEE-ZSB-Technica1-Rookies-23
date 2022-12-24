function circularArrayRotation(a, k, queries) {
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(a[(queries[i] - k % a.length + a.length) % a.length]);
    }
    return result;
}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));
