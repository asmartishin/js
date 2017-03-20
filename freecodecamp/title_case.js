function titleCase(str) {
    var exception_list = ['the', 'of'];
    var str_array = str.split(' ');
    for (var i = 0; i < str_array.length; i++) {
        str_array[i] = str_array[i].toLowerCase();
        if (exception_list.indexOf(str_array[i]) == -1) {
            str_array[i] = str_array[i].replace(/^[a-z]/g, str_array[i].charAt(0).toUpperCase());
        }
    }
    return str_array.join(' ');
}

console.log(titleCase('sHoRt AnD sToUt'));