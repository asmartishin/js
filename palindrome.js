#!/usr/bin/env node

function palindrome(str) {
    var string = str.toLowerCase().replace(/[\s.,():\-_\/]/g, '');
    var string_length = string.length;
    for (var i = 0; i < parseInt(string_length / 2); i++) {
        if (string[i] != string[string_length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome('0_0 (: /-\ :) 0-0'));