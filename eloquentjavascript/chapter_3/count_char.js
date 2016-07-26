function countChar(string, char) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countChar('asds', 's'));

