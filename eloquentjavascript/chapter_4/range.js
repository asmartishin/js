function range(start, end, step = 1) {
    let array = [];
    if (start < end && step >= 1) {
        for (let i = start; i < end + 1; i += step) {
            array.push(i);
        }
    } else if (start > end && step <= -1) {
        for (let i = end; i < start + 1; i -= step) {
            array.push(i);
        }
        array.reverse();
    }
    return array;
}

function sum(array) {
    let result = 0;
    for (let i = 0; i < array.length; i++) {
        result += array[i];
    }
    return result;
}

console.log(range(5, 2, -1));