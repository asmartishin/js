function findLongestWord(str) {
    var str_array = str.split(' ');
    var max_length = 0;
    for (var i =0; i < str_array.length; i++) {
        console.log(str_array[i]);
        if (str_array[i].length > max_length) {
            max_length = str_array[i].length;
        }
    }
    return max_length;
}

console.log(findLongestWord('asd asdasd'));
