#!/usr/bin/env node

function Triangle() {
    var string = '#'
    for (var i = 0; i < 7; i++) {
        console.log(string);
        string += '#';
    }
}

Triangle();
