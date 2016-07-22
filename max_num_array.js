function largestOfFour(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var max = 0;
        for (var j = 0; j < arr[i].length; j++){
            if (arr[i][j] > max) {
                max = arr[i][j];
            }
        }
        result.push(max);
    }
    return result;
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));