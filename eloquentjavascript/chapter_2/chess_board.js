#!/usr/bin/env node

function ChessBoard() {
    var string = '';
    for (var i = 0; i < 8; i++) {
        string = ''
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 1) {
                string += '#';
            } else {
                string += ' ';
            }
        }
        console.log(string);
    }
}

ChessBoard();
