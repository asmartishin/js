function reverseArray(array) {
    var otherArray = [];
    let len = array.length - 1;
    for (let i = 0; i < len + 1; i++) {
        otherArray.push(array[len - i]);
    }
    return otherArray;
}

function reverseArrayInPlace(array) {
    let len = array.length - 1;
    for (let i = 0; i < parseInt(array.length / 2); i++) {
        array[i] += array[len - i];
        array[len - i] = array[i] - array[len - i];
        array[i] -= array[len - i];
    }
    return array;
}

console.log(reverseArrayInPlace([1,2,3,4,5]));