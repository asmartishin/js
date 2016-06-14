#!/usr/bin/env node

//function factorialize(num) {
//    result = 1
//    for (var i = 1; i <= num; i++) {
//        result *= i;
//    }
//    return result;
//}

function factorialize(num) {
    if (num == 0) {
        return 1;
    } else if (num == 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

console.log(factorialize(0));
