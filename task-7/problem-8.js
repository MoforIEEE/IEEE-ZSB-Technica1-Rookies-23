const borze = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '.') {
            result += '0';
        } else if (str[i] === '-' && str[i + 1] === '.') {
            result += '1';
            i++;
        } else {
            result += '2';
            i++;
        }
    }
    return result;
}
