function findDigits(n) {
    let counter = 0;
    let digits = n.toString().split('');
    digits.forEach(digit => {
        if (n % digit === 0) {
            counter++;
        }
    });
    return counter;
}
console.log(findDigits(10));
