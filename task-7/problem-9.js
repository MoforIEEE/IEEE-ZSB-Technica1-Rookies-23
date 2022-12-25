function distinctDigitYear(year) {
    while (true) {
        year++;
        if (new Set(year.toString()).size === year.toString().length) return year;
    }
}
console.log(distinctDigitYear(1987));