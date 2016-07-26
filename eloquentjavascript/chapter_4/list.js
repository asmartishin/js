function arrayToList(array) {
    let curentItem;
    let list = {};
    if (array.length > 1) {
        curentItem = array.shift();
        list.value = curentItem;
        list.rest =  arrayToList(array);
    } else {
        curentItem = array.shift();
        list.value = curentItem;
        list.rest = null;
    }
    return list;
}

function listToArray(list, array = []) {
    if (list.rest) {
        array.push(list.value);
        listToArray(list.rest, array);
    } else if (list.rest == null) {
        array.push(list.value);
    }
    return array;
}

console.log(JSON.stringify(arrayToList([1,2,3,5])));
console.log(listToArray(arrayToList([1,2,3,5])));