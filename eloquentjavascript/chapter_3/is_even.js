function isEven(a) {
    if (a < 0) {
        return `Number should be greater, then 0. ${a} is not`
    } 
    if (a === 0) {
        return true;
    } else if (a === 1) {
        return false;
    } else { 
        return isEven(a - 2);
    }
}

console.log(isEven(-1));