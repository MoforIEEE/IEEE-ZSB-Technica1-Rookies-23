function readBook(n, t, a) {
    let i = 0;
    while (t > 0 && i < n) {
        t -= 86400 - a[i];
        i++;
    }
    return i;
    }
console.log(readBook(2,2,[86400,86398]));
